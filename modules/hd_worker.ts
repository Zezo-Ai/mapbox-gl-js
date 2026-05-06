import {
    BuildingBucket,
    waitForBuildingGen,
    parseElevationFeatures,
    attachExtension,
    postprocessTile,
} from './hd_worker_imports';

export {BuildingBucket, parseElevationFeatures, attachExtension, postprocessTile};

// Live in UMD builds: HD is always loaded because all symbols are resolved
// synchronously at bundle load time. ESM exposes the same shape but lazily.
export const loaded = true;

export async function prepareHD() { return waitForBuildingGen(); }
