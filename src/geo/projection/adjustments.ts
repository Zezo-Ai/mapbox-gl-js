import LngLat from '../lng_lat';
import MercatorCoordinate, {MAX_MERCATOR_LATITUDE} from '../mercator_coordinate';
import {mat4, mat2} from 'gl-matrix';
import {clamp, smoothstep} from '../../util/util';

import type Projection from './projection';
import type Transform from '../transform';

export default function getProjectionAdjustments(transform: Transform, withoutRotation?: boolean): number[] {
    const interpT = getProjectionInterpolationT(transform.projection, transform.zoom, transform.width, transform.height);
    const matrix = getShearAdjustment(transform.projection, transform.zoom, transform.center, interpT, withoutRotation);

    const scaleAdjustment = getScaleAdjustment(transform);
    mat4.scale(matrix, matrix, [scaleAdjustment, scaleAdjustment, 1]);

    return matrix as number[];
}

export function getScaleAdjustment(transform: Transform): number {
    const projection = transform.projection;
    const interpT = getProjectionInterpolationT(transform.projection, transform.zoom, transform.width, transform.height);
    const zoomAdjustment = getZoomAdjustment(projection, transform.center);
    const zoomAdjustmentOrigin = getZoomAdjustment(projection, LngLat.convert(projection.center));
    const scaleAdjustment = Math.pow(2, zoomAdjustment * interpT + (1 - interpT) * zoomAdjustmentOrigin);
    return scaleAdjustment;
}

export function getProjectionAdjustmentInverted(transform: Transform): mat2 {
    const m = getProjectionAdjustments(transform, true);
    return mat2.invert([] as unknown as mat2, [
        m[0], m[1],
        m[4], m[5]]
    );
}

export function getProjectionInterpolationT(
    projection: Projection,
    zoom: number,
    width: number,
    height: number,
    maxSize: number = Infinity,
): number {
    const range = projection.range;
    if (!range) return 0;

    const size = Math.min(maxSize, Math.max(width, height));
    // The interpolation ranges are manually defined based on what makes
    // sense in a 1024px wide map. Adjust the ranges to the current size
    // of the map. The smaller the map, the earlier you can start unskewing.
    const rangeAdjustment = Math.log(size / 1024) / Math.LN2;
    const zoomA = range[0] + rangeAdjustment;
    const zoomB = range[1] + rangeAdjustment;
    const t = smoothstep(zoomA, zoomB, zoom);
    return t;
}

// approx. kilometers per longitude degree at equator
const offset = 1 / 40000;

/*
 * Calculates the scale difference between Mercator and the given projection at a certain location.
 */
export function getZoomAdjustment(projection: Projection, loc: LngLat) {
    // make sure we operate within mercator space for adjustments (they can go over for other projections)
    const lat = clamp(loc.lat, -MAX_MERCATOR_LATITUDE, MAX_MERCATOR_LATITUDE);

    const loc1 = new LngLat(loc.lng - 180 * offset, lat);
    const loc2 = new LngLat(loc.lng + 180 * offset, lat);

    const p1 = projection.project(loc1.lng, lat);
    const p2 = projection.project(loc2.lng, lat);

    const m1 = MercatorCoordinate.fromLngLat(loc1);
    const m2 = MercatorCoordinate.fromLngLat(loc2);

    const pdx = p2.x - p1.x;
    const pdy = p2.y - p1.y;
    const mdx = m2.x - m1.x;
    const mdy = m2.y - m1.y;

    const scale = Math.sqrt((mdx * mdx + mdy * mdy) / (pdx * pdx + pdy * pdy));

    return Math.log(scale) / Math.LN2;
}

function getShearAdjustment(projection: Projection, zoom: number, loc: LngLat, interpT: number, withoutRotation?: boolean) {

    // create two locations a tiny amount (~1km) east and west of the given location
    const locw = new LngLat(loc.lng - 180 * offset, loc.lat);
    const loce = new LngLat(loc.lng + 180 * offset, loc.lat);

    const pw = projection.project(locw.lng, locw.lat);
    const pe = projection.project(loce.lng, loce.lat);

    const pdx = pe.x - pw.x;
    const pdy = pe.y - pw.y;

    // Calculate how much the map would need to be rotated to make east-west in
    // projected coordinates be left-right
    const angleAdjust = -Math.atan2(pdy, pdx);

    // Pick a location identical to the original one except for poles to make sure we're within mercator bounds
    const mc2 = MercatorCoordinate.fromLngLat(loc);
    mc2.y = clamp(mc2.y, -1 + offset, 1 - offset);
    const loc2 = mc2.toLngLat();
    const p2 = projection.project(loc2.lng, loc2.lat);

    // Find the projected coordinates of two locations, one slightly south and one slightly east.
    // Then calculate the transform that would make the projected coordinates of the two locations be:
    // - equal distances from the original location
    // - perpendicular to one another
    //
    // Only the position of the coordinate to the north is adjusted.
    // The coordinate to the east stays where it is.
    const mc3 = MercatorCoordinate.fromLngLat(loc2);
    mc3.x += offset;
    const loc3 = mc3.toLngLat();
    const p3 = projection.project(loc3.lng, loc3.lat);
    const pdx3 = p3.x - p2.x;
    const pdy3 = p3.y - p2.y;
    const delta3 = rotate(pdx3, pdy3, angleAdjust);

    const mc4 = MercatorCoordinate.fromLngLat(loc2);
    mc4.y += offset;
    const loc4 = mc4.toLngLat();
    const p4 = projection.project(loc4.lng, loc4.lat);
    const pdx4 = p4.x - p2.x;
    const pdy4 = p4.y - p2.y;
    const delta4 = rotate(pdx4, pdy4, angleAdjust);

    const scale = Math.abs(delta3.x) / Math.abs(delta4.y);

    const unrotate = mat4.identity([] as unknown as mat4);
    mat4.rotateZ(unrotate, unrotate, (-angleAdjust) * (1 - (withoutRotation ? 0 : interpT)));

    // unskew
    const shear = mat4.identity([] as unknown as mat4);
    mat4.scale(shear, shear, [1, 1 - (1 - scale) * interpT, 1]);
    shear[4] = -delta4.x / delta4.y * interpT;

    // unrotate
    mat4.rotateZ(shear, shear, angleAdjust);

    mat4.multiply(shear, unrotate, shear);

    return shear;
}

function rotate(x: number, y: number, angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: x * cos - y * sin,
        y: x * sin + y * cos
    };
}
