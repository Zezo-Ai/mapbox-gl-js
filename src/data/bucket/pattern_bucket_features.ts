import ResolvedImage from '../../style-spec/expression/types/resolved_image';

import type FillStyleLayer from '../../style/style_layer/fill_style_layer';
import type FillExtrusionStyleLayer from '../../style/style_layer/fill_extrusion_style_layer';
import type LineStyleLayer from '../../style/style_layer/line_style_layer';
import type {
    BucketFeature,
    ImageDependencies,
    PopulateParameters
} from '../bucket';

type PatternStyleLayers = Array<LineStyleLayer> | Array<FillStyleLayer> | Array<FillExtrusionStyleLayer>;

function addPattern(pattern: string | ResolvedImage, patterns: ImageDependencies, pixelRatio: number = 1): string | null {
    if (!pattern) {
        return null;
    }

    const patternId = typeof pattern === 'string' ? pattern : pattern.getPrimary().id;

    if (!patterns[patternId]) {
        patterns[patternId] = [];
    }

    const patternPrimary = ResolvedImage.from(patternId).getPrimary().scaleSelf(pixelRatio);
    patterns[patternId].push(patternPrimary);
    return patternPrimary.serialize();
}

export function hasPattern(type: string, layers: PatternStyleLayers, pixelRatio: number, options: PopulateParameters): boolean {
    const patterns = options.patternDependencies;
    let hasPattern = false;

    for (const layer of layers) {
        // @ts-expect-error - TS2349 - This expression is not callable.
        const patternProperty = layer.paint.get(`${type}-pattern`);

        if (!patternProperty.isConstant()) {
            hasPattern = true;
        }

        const constantPattern = patternProperty.constantOr(null);

        if (addPattern(constantPattern, patterns, pixelRatio)) {
            hasPattern = true;
        }
    }

    return hasPattern;
}

export function addPatternDependencies(
    type: string,
    layers: PatternStyleLayers,
    patternFeature: BucketFeature,
    zoom: number,
    pixelRatio: number,
    options: PopulateParameters,
): BucketFeature {
    const patterns = options.patternDependencies;
    for (const layer of layers) {
        // @ts-expect-error - TS2349 - This expression is not callable.
        const patternProperty = layer.paint.get(`${type}-pattern`);

        const patternPropertyValue = patternProperty.value;
        if (patternPropertyValue.kind !== "constant") {
            let pattern = patternPropertyValue.evaluate({zoom}, patternFeature, {}, options.availableImages);
            pattern = pattern && pattern.name ? pattern.name : pattern;

            const patternSerialized: string | null = addPattern(pattern, patterns, pixelRatio);

            // save for layout
            if (patternSerialized) {
                patternFeature.patterns[layer.id] = patternSerialized;
            }
        }
    }
    return patternFeature;
}
