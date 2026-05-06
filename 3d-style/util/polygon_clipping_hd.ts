import * as martinez from 'martinez-polygon-clipping';
import Point from '@mapbox/point-geometry';

import type {EdgeIterator} from '../elevation/elevation_feature';

/**
 * Polygon clipping primitives that depend on the `martinez-polygon-clipping` library
 * (plus its transitive deps: `splaytree`, `tinyqueue`, `robust-predicates`). Only the
 * HD elevated-road path uses these — `clip` and `polygonSubdivision` are called from
 * `fill_hd_extension.ts`. Keeping them out of `src/util/polygon_clipping.ts` means the
 * ~30 KB martinez dep chain ships in the HD chunk instead of the core bundle.
 *
 * Non-martinez polygon helpers (`clipPolygon`, `gridSubdivision`) stay in core because
 * `fill_extrusion_bucket.ts` needs them on every tile regardless of HD.
 *
 * @private
 */

export function clip(subjectPolygon: Point[][], clipRing: Point[]): Point[][][] {
    const geom = toMultiPolygon(subjectPolygon);
    const clipGeom = toMultiPolygon([clipRing]);

    const polygons = martinez.intersection(geom, clipGeom) as martinez.MultiPolygon;
    if (polygons == null) return [];

    return fromMultiPolygon(polygons);
}

export function polygonSubdivision(subjectPolygon: Point[][], subdivisionEdges: EdgeIterator, edgeExtension: number = 0): Point[][][] {
    // Perform clipping temporarily in a 32bit space where few unit wide polygons are just
    // lines when scaled back to 16bit.
    const scale = 1 << 16;
    let polygons = toMultiPolygon(subjectPolygon, scale);

    const clipGeometry: martinez.Polygon[] = [];

    // Split the polygon using edges from the iterator
    for (; subdivisionEdges.valid(); subdivisionEdges.next()) {
        const [a, b] = subdivisionEdges.get();

        let ax = a.x * scale;
        let ay = a.y * scale;
        let bx = b.x * scale;
        let by = b.y * scale;

        const dx = bx - ax;
        const dy = by - ay;
        const len = Math.hypot(dx, dy);
        if (len === 0) continue;

        ax -= dx * edgeExtension;
        ay -= dy * edgeExtension;
        bx += dx * edgeExtension;
        by += dy * edgeExtension;

        // Expand the polygon towards the perpendicular vector by few units
        const shiftX = Math.trunc(dy / len * 3.0);
        const shiftY = -Math.trunc(dx / len * 3.0);

        clipGeometry.push([
            [
                [ax, ay],
                [bx, by],
                [bx + shiftX, by + shiftY],
                [ax + shiftX, ay + shiftY],
                [ax, ay]
            ]
        ]);
    }

    if (clipGeometry.length > 0) {
        polygons = martinez.diff(polygons, clipGeometry) as martinez.MultiPolygon;
    }

    // Snap to grid of 128 in 32bit space to eliminate martinez precision errors.
    // This corresponds to ~0.002 tile units (128 / 65536) after scaling back.
    return fromMultiPolygon(polygons, 1 / scale, 128);
}

function toMultiPolygon(polygon: Point[][], scale: number = 1.0): martinez.MultiPolygon {
    return [polygon.map(ring => ring.map(p => [p.x * scale, p.y * scale]))];
}

/**
 * Converts martinez MultiPolygon geometry back to Point arrays.
 *
 * @param {martinez.MultiPolygon} geometry - The martinez MultiPolygon to convert
 * @param {number} scale - Scale factor to apply to coordinates (default 1.0)
 * @param {number} [gridSize] - Optional grid size for snapping coordinates before scaling.
 *                              When provided, coordinates are rounded to the nearest multiple
 *                              of this value before scaling. This helps eliminate floating-point
 *                              precision errors from the martinez library, ensuring that adjacent
 *                              polygon edges that should share vertices end up with identical
 *                              coordinates after conversion.
 * @returns {Point[][][]}
 * @private
 */
function fromMultiPolygon(geometry: martinez.MultiPolygon, scale: number = 1.0, gridSize?: number): Point[][][] {
    return geometry.map(poly => poly.map((ring, index) => {
        const r = ring.map(p => {
            let x = p[0];
            let y = p[1];

            if (gridSize) {
                x = Math.round(x / gridSize) * gridSize;
                y = Math.round(y / gridSize) * gridSize;
            }

            return new Point(x * scale, y * scale)._round();
        });
        if (index > 0) {
            // Reverse holes
            r.reverse();
        }
        return r;
    }));
}
