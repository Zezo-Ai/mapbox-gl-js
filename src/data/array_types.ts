// This file is generated. Edit build/generate-struct-arrays.ts, then run `npm run codegen`.
/* eslint-disable camelcase */

import assert from 'assert';
import {Struct, StructArray} from '../util/struct_array';
import {register} from '../util/web_worker_transfer';

import type {IStructArrayLayout} from '../util/struct_array';

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 *
 * @private
 */
class StructArrayLayout2i4 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1);
    }

    override emplace(i: number, v0: number, v1: number): number {
        const o2 = i * 2;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        return i;
    }
}

StructArrayLayout2i4.prototype.bytesPerElement = 4;
register(StructArrayLayout2i4, 'StructArrayLayout2i4');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 *
 * @private
 */
class StructArrayLayout3i6 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    override emplace(i: number, v0: number, v1: number, v2: number): number {
        const o2 = i * 3;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        return i;
    }
}

StructArrayLayout3i6.prototype.bytesPerElement = 6;
register(StructArrayLayout3i6, 'StructArrayLayout3i6');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 *
 * @private
 */
class StructArrayLayout4i8 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o2 = i * 4;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        return i;
    }
}

StructArrayLayout4i8.prototype.bytesPerElement = 8;
register(StructArrayLayout4i8, 'StructArrayLayout4i8');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[1]
 *
 * @private
 */
class StructArrayLayout1f4 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    override emplace(i: number, v0: number): number {
        const o4 = i * 1;
        this.float32[o4 + 0] = v0;
        return i;
    }
}

StructArrayLayout1f4.prototype.bytesPerElement = 4;
register(StructArrayLayout1f4, 'StructArrayLayout1f4');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 * [4]: Float32[1]
 *
 * @private
 */
class StructArrayLayout2i1f8 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    override emplace(i: number, v0: number, v1: number, v2: number): number {
        const o2 = i * 4;
        const o4 = i * 2;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.float32[o4 + 1] = v2;
        return i;
    }
}

StructArrayLayout2i1f8.prototype.bytesPerElement = 8;
register(StructArrayLayout2i1f8, 'StructArrayLayout2i1f8');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 *
 * @private
 */
class StructArrayLayout3i8 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    override emplace(i: number, v0: number, v1: number, v2: number): number {
        const o2 = i * 4;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        return i;
    }
}

StructArrayLayout3i8.prototype.bytesPerElement = 8;
register(StructArrayLayout3i8, 'StructArrayLayout3i8');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[5]
 *
 * @private
 */
class StructArrayLayout5i10 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const o2 = i * 5;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        return i;
    }
}

StructArrayLayout5i10.prototype.bytesPerElement = 10;
register(StructArrayLayout5i10, 'StructArrayLayout5i10');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[2]
 * [4]: Uint8[4]
 * [8]: Float32[1]
 *
 * @private
 */
class StructArrayLayout2i4ub1f12 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const o2 = i * 6;
        const o1 = i * 12;
        const o4 = i * 3;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.uint8[o1 + 4] = v2;
        this.uint8[o1 + 5] = v3;
        this.uint8[o1 + 6] = v4;
        this.uint8[o1 + 7] = v5;
        this.float32[o4 + 2] = v6;
        return i;
    }
}

StructArrayLayout2i4ub1f12.prototype.bytesPerElement = 12;
register(StructArrayLayout2i4ub1f12, 'StructArrayLayout2i4ub1f12');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[3]
 *
 * @private
 */
class StructArrayLayout3f12 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    override emplace(i: number, v0: number, v1: number, v2: number): number {
        const o4 = i * 3;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        return i;
    }
}

StructArrayLayout3f12.prototype.bytesPerElement = 12;
register(StructArrayLayout3f12, 'StructArrayLayout3f12');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[4]
 * [8]: Float32[1]
 *
 * @private
 */
class StructArrayLayout4ui1f12 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint16: Uint16Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const o2 = i * 6;
        const o4 = i * 3;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        this.float32[o4 + 2] = v4;
        return i;
    }
}

StructArrayLayout4ui1f12.prototype.bytesPerElement = 12;
register(StructArrayLayout4ui1f12, 'StructArrayLayout4ui1f12');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[4]
 *
 * @private
 */
class StructArrayLayout4ui8 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o2 = i * 4;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        return i;
    }
}

StructArrayLayout4ui8.prototype.bytesPerElement = 8;
register(StructArrayLayout4ui8, 'StructArrayLayout4ui8');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[6]
 *
 * @private
 */
class StructArrayLayout6i12 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const o2 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        return i;
    }
}

StructArrayLayout6i12.prototype.bytesPerElement = 12;
register(StructArrayLayout6i12, 'StructArrayLayout6i12');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 * [8]: Uint16[4]
 * [16]: Int16[4]
 *
 * @private
 */
class StructArrayLayout4i4ui4i24 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number): number {
        const o2 = i * 12;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.uint16[o2 + 4] = v4;
        this.uint16[o2 + 5] = v5;
        this.uint16[o2 + 6] = v6;
        this.uint16[o2 + 7] = v7;
        this.int16[o2 + 8] = v8;
        this.int16[o2 + 9] = v9;
        this.int16[o2 + 10] = v10;
        this.int16[o2 + 11] = v11;
        return i;
    }
}

StructArrayLayout4i4ui4i24.prototype.bytesPerElement = 24;
register(StructArrayLayout4i4ui4i24, 'StructArrayLayout4i4ui4i24');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Float32[3]
 *
 * @private
 */
class StructArrayLayout3i3f20 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const o2 = i * 10;
        const o4 = i * 5;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.float32[o4 + 2] = v3;
        this.float32[o4 + 3] = v4;
        this.float32[o4 + 4] = v5;
        return i;
    }
}

StructArrayLayout3i3f20.prototype.bytesPerElement = 20;
register(StructArrayLayout3i3f20, 'StructArrayLayout3i3f20');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[4]
 *
 * @private
 */
class StructArrayLayout4f16 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o4 = i * 4;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        return i;
    }
}

StructArrayLayout4f16.prototype.bytesPerElement = 16;
register(StructArrayLayout4f16, 'StructArrayLayout4f16');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint32[1]
 *
 * @private
 */
class StructArrayLayout1ul4 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint32: Uint32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    override emplace(i: number, v0: number): number {
        const o4 = i * 1;
        this.uint32[o4 + 0] = v0;
        return i;
    }
}

StructArrayLayout1ul4.prototype.bytesPerElement = 4;
register(StructArrayLayout1ul4, 'StructArrayLayout1ul4');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[2]
 *
 * @private
 */
class StructArrayLayout2ui4 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1);
    }

    override emplace(i: number, v0: number, v1: number): number {
        const o2 = i * 2;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        return i;
    }
}

StructArrayLayout2ui4.prototype.bytesPerElement = 4;
register(StructArrayLayout2ui4, 'StructArrayLayout2ui4');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[5]
 * [12]: Float32[4]
 * [28]: Int16[1]
 * [32]: Uint32[1]
 * [36]: Uint16[2]
 *
 * @private
 */
class StructArrayLayout5i4f1i1ul2ui40 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;
    override float32: Float32Array;
    override uint32: Uint32Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number): number {
        const o2 = i * 20;
        const o4 = i * 10;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.float32[o4 + 3] = v5;
        this.float32[o4 + 4] = v6;
        this.float32[o4 + 5] = v7;
        this.float32[o4 + 6] = v8;
        this.int16[o2 + 14] = v9;
        this.uint32[o4 + 8] = v10;
        this.uint16[o2 + 18] = v11;
        this.uint16[o2 + 19] = v12;
        return i;
    }
}

StructArrayLayout5i4f1i1ul2ui40.prototype.bytesPerElement = 40;
register(StructArrayLayout5i4f1i1ul2ui40, 'StructArrayLayout5i4f1i1ul2ui40');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Int16[2]
 * [12]: Int16[2]
 *
 * @private
 */
class StructArrayLayout3i2i2i16 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const o2 = i * 8;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 4] = v3;
        this.int16[o2 + 5] = v4;
        this.int16[o2 + 6] = v5;
        this.int16[o2 + 7] = v6;
        return i;
    }
}

StructArrayLayout3i2i2i16.prototype.bytesPerElement = 16;
register(StructArrayLayout3i2i2i16, 'StructArrayLayout3i2i2i16');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[2]
 * [8]: Float32[1]
 * [12]: Int16[2]
 *
 * @private
 */
class StructArrayLayout2f1f2i16 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const o4 = i * 4;
        const o2 = i * 8;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.int16[o2 + 6] = v3;
        this.int16[o2 + 7] = v4;
        return i;
    }
}

StructArrayLayout2f1f2i16.prototype.bytesPerElement = 16;
register(StructArrayLayout2f1f2i16, 'StructArrayLayout2f1f2i16');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint8[2]
 * [4]: Float32[4]
 *
 * @private
 */
class StructArrayLayout2ub4f20 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const o1 = i * 20;
        const o4 = i * 5;
        this.uint8[o1 + 0] = v0;
        this.uint8[o1 + 1] = v1;
        this.float32[o4 + 1] = v2;
        this.float32[o4 + 2] = v3;
        this.float32[o4 + 3] = v4;
        this.float32[o4 + 4] = v5;
        return i;
    }
}

StructArrayLayout2ub4f20.prototype.bytesPerElement = 20;
register(StructArrayLayout2ub4f20, 'StructArrayLayout2ub4f20');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[3]
 *
 * @private
 */
class StructArrayLayout3ui6 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2);
    }

    override emplace(i: number, v0: number, v1: number, v2: number): number {
        const o2 = i * 3;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        return i;
    }
}

StructArrayLayout3ui6.prototype.bytesPerElement = 6;
register(StructArrayLayout3ui6, 'StructArrayLayout3ui6');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[3]
 * [8]: Float32[2]
 * [16]: Uint16[2]
 * [20]: Uint32[3]
 * [32]: Uint16[3]
 * [40]: Float32[2]
 * [48]: Uint8[3]
 * [52]: Uint32[1]
 * [56]: Int16[1]
 * [58]: Uint8[1]
 *
 * @private
 */
class StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;
    override float32: Float32Array;
    override uint16: Uint16Array;
    override uint32: Uint32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number): number {
        const o2 = i * 30;
        const o4 = i * 15;
        const o1 = i * 60;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.float32[o4 + 2] = v3;
        this.float32[o4 + 3] = v4;
        this.uint16[o2 + 8] = v5;
        this.uint16[o2 + 9] = v6;
        this.uint32[o4 + 5] = v7;
        this.uint32[o4 + 6] = v8;
        this.uint32[o4 + 7] = v9;
        this.uint16[o2 + 16] = v10;
        this.uint16[o2 + 17] = v11;
        this.uint16[o2 + 18] = v12;
        this.float32[o4 + 10] = v13;
        this.float32[o4 + 11] = v14;
        this.uint8[o1 + 48] = v15;
        this.uint8[o1 + 49] = v16;
        this.uint8[o1 + 50] = v17;
        this.uint32[o4 + 13] = v18;
        this.int16[o2 + 28] = v19;
        this.uint8[o1 + 58] = v20;
        return i;
    }
}

StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60.prototype.bytesPerElement = 60;
register(StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60, 'StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[2]
 * [8]: Int16[9]
 * [26]: Uint16[15]
 * [56]: Uint32[1]
 * [60]: Float32[4]
 * [76]: Uint8[1]
 * [78]: Uint16[1]
 *
 * @private
 */
class StructArrayLayout2f9i15ui1ul4f1ub1ui80 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;
    override int16: Int16Array;
    override uint16: Uint16Array;
    override uint32: Uint32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number, v21: number, v22: number, v23: number, v24: number, v25: number, v26: number, v27: number, v28: number, v29: number, v30: number, v31: number, v32: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23, v24, v25, v26, v27, v28, v29, v30, v31, v32);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number, v16: number, v17: number, v18: number, v19: number, v20: number, v21: number, v22: number, v23: number, v24: number, v25: number, v26: number, v27: number, v28: number, v29: number, v30: number, v31: number, v32: number): number {
        const o4 = i * 20;
        const o2 = i * 40;
        const o1 = i * 80;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.int16[o2 + 4] = v2;
        this.int16[o2 + 5] = v3;
        this.int16[o2 + 6] = v4;
        this.int16[o2 + 7] = v5;
        this.int16[o2 + 8] = v6;
        this.int16[o2 + 9] = v7;
        this.int16[o2 + 10] = v8;
        this.int16[o2 + 11] = v9;
        this.int16[o2 + 12] = v10;
        this.uint16[o2 + 13] = v11;
        this.uint16[o2 + 14] = v12;
        this.uint16[o2 + 15] = v13;
        this.uint16[o2 + 16] = v14;
        this.uint16[o2 + 17] = v15;
        this.uint16[o2 + 18] = v16;
        this.uint16[o2 + 19] = v17;
        this.uint16[o2 + 20] = v18;
        this.uint16[o2 + 21] = v19;
        this.uint16[o2 + 22] = v20;
        this.uint16[o2 + 23] = v21;
        this.uint16[o2 + 24] = v22;
        this.uint16[o2 + 25] = v23;
        this.uint16[o2 + 26] = v24;
        this.uint16[o2 + 27] = v25;
        this.uint32[o4 + 14] = v26;
        this.float32[o4 + 15] = v27;
        this.float32[o4 + 16] = v28;
        this.float32[o4 + 17] = v29;
        this.float32[o4 + 18] = v30;
        this.uint8[o1 + 76] = v31;
        this.uint16[o2 + 39] = v32;
        return i;
    }
}

StructArrayLayout2f9i15ui1ul4f1ub1ui80.prototype.bytesPerElement = 80;
register(StructArrayLayout2f9i15ui1ul4f1ub1ui80, 'StructArrayLayout2f9i15ui1ul4f1ub1ui80');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[6]
 *
 * @private
 */
class StructArrayLayout6f24 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number): number {
        const o4 = i * 6;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        this.float32[o4 + 5] = v5;
        return i;
    }
}

StructArrayLayout6f24.prototype.bytesPerElement = 24;
register(StructArrayLayout6f24, 'StructArrayLayout6f24');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[5]
 *
 * @private
 */
class StructArrayLayout5f20 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number): number {
        const o4 = i * 5;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        return i;
    }
}

StructArrayLayout5f20.prototype.bytesPerElement = 20;
register(StructArrayLayout5f20, 'StructArrayLayout5f20');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[7]
 *
 * @private
 */
class StructArrayLayout7f28 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const o4 = i * 7;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        this.float32[o4 + 5] = v5;
        this.float32[o4 + 6] = v6;
        return i;
    }
}

StructArrayLayout7f28.prototype.bytesPerElement = 28;
register(StructArrayLayout7f28, 'StructArrayLayout7f28');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[11]
 *
 * @private
 */
class StructArrayLayout11f44 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number): number {
        const o4 = i * 11;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        this.float32[o4 + 5] = v5;
        this.float32[o4 + 6] = v6;
        this.float32[o4 + 7] = v7;
        this.float32[o4 + 8] = v8;
        this.float32[o4 + 9] = v9;
        this.float32[o4 + 10] = v10;
        return i;
    }
}

StructArrayLayout11f44.prototype.bytesPerElement = 44;
register(StructArrayLayout11f44, 'StructArrayLayout11f44');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[9]
 *
 * @private
 */
class StructArrayLayout9f36 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number): number {
        const o4 = i * 9;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        this.float32[o4 + 5] = v5;
        this.float32[o4 + 6] = v6;
        this.float32[o4 + 7] = v7;
        this.float32[o4 + 8] = v8;
        return i;
    }
}

StructArrayLayout9f36.prototype.bytesPerElement = 36;
register(StructArrayLayout9f36, 'StructArrayLayout9f36');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[2]
 *
 * @private
 */
class StructArrayLayout2f8 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1);
    }

    override emplace(i: number, v0: number, v1: number): number {
        const o4 = i * 2;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        return i;
    }
}

StructArrayLayout2f8.prototype.bytesPerElement = 8;
register(StructArrayLayout2f8, 'StructArrayLayout2f8');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint32[1]
 * [4]: Uint16[3]
 *
 * @private
 */
class StructArrayLayout1ul3ui12 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint32: Uint32Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number): number {
        const o4 = i * 3;
        const o2 = i * 6;
        this.uint32[o4 + 0] = v0;
        this.uint16[o2 + 2] = v1;
        this.uint16[o2 + 3] = v2;
        this.uint16[o2 + 4] = v3;
        return i;
    }
}

StructArrayLayout1ul3ui12.prototype.bytesPerElement = 12;
register(StructArrayLayout1ul3ui12, 'StructArrayLayout1ul3ui12');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[1]
 *
 * @private
 */
class StructArrayLayout1ui2 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint16: Uint16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    override emplace(i: number, v0: number): number {
        const o2 = i * 1;
        this.uint16[o2 + 0] = v0;
        return i;
    }
}

StructArrayLayout1ui2.prototype.bytesPerElement = 2;
register(StructArrayLayout1ui2, 'StructArrayLayout1ui2');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[16]
 *
 * @private
 */
class StructArrayLayout16f64 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number, v14: number, v15: number): number {
        const o4 = i * 16;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        this.float32[o4 + 3] = v3;
        this.float32[o4 + 4] = v4;
        this.float32[o4 + 5] = v5;
        this.float32[o4 + 6] = v6;
        this.float32[o4 + 7] = v7;
        this.float32[o4 + 8] = v8;
        this.float32[o4 + 9] = v9;
        this.float32[o4 + 10] = v10;
        this.float32[o4 + 11] = v11;
        this.float32[o4 + 12] = v12;
        this.float32[o4 + 13] = v13;
        this.float32[o4 + 14] = v14;
        this.float32[o4 + 15] = v15;
        return i;
    }
}

StructArrayLayout16f64.prototype.bytesPerElement = 64;
register(StructArrayLayout16f64, 'StructArrayLayout16f64');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint16[4]
 * [8]: Float32[3]
 *
 * @private
 */
class StructArrayLayout4ui3f20 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override uint16: Uint16Array;
    override float32: Float32Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0, v1, v2, v3, v4, v5, v6);
    }

    override emplace(i: number, v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number): number {
        const o2 = i * 10;
        const o4 = i * 5;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        this.float32[o4 + 2] = v4;
        this.float32[o4 + 3] = v5;
        this.float32[o4 + 4] = v6;
        return i;
    }
}

StructArrayLayout4ui3f20.prototype.bytesPerElement = 20;
register(StructArrayLayout4ui3f20, 'StructArrayLayout4ui3f20');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[1]
 *
 * @private
 */
class StructArrayLayout1i2 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;
    override int16: Int16Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    override emplace(i: number, v0: number): number {
        const o2 = i * 1;
        this.int16[o2 + 0] = v0;
        return i;
    }
}

StructArrayLayout1i2.prototype.bytesPerElement = 2;
register(StructArrayLayout1i2, 'StructArrayLayout1i2');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint8[1]
 *
 * @private
 */
class StructArrayLayout1ub1 extends StructArray implements IStructArrayLayout {
    override uint8: Uint8Array;

    override _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
    }

    override emplaceBack(v0: number): number {
        const i = this.length;
        this.resize(i + 1);
        return this.emplace(i, v0);
    }

    override emplace(i: number, v0: number): number {
        const o1 = i * 1;
        this.uint8[o1 + 0] = v0;
        return i;
    }
}

StructArrayLayout1ub1.prototype.bytesPerElement = 1;
register(StructArrayLayout1ub1, 'StructArrayLayout1ub1');

class CollisionBoxStruct extends Struct {
    override _structArray: CollisionBoxArray;
    get projectedAnchorX(): number { return this._structArray.int16[this._pos2 + 0]; }
    get projectedAnchorY(): number { return this._structArray.int16[this._pos2 + 1]; }
    get projectedAnchorZ(): number { return this._structArray.int16[this._pos2 + 2]; }
    get tileAnchorX(): number { return this._structArray.int16[this._pos2 + 3]; }
    get tileAnchorY(): number { return this._structArray.int16[this._pos2 + 4]; }
    get x1(): number { return this._structArray.float32[this._pos4 + 3]; }
    get y1(): number { return this._structArray.float32[this._pos4 + 4]; }
    get x2(): number { return this._structArray.float32[this._pos4 + 5]; }
    get y2(): number { return this._structArray.float32[this._pos4 + 6]; }
    get padding(): number { return this._structArray.int16[this._pos2 + 14]; }
    get featureIndex(): number { return this._structArray.uint32[this._pos4 + 8]; }
    get sourceLayerIndex(): number { return this._structArray.uint16[this._pos2 + 18]; }
    get bucketIndex(): number { return this._structArray.uint16[this._pos2 + 19]; }
}

CollisionBoxStruct.prototype.size = 40;

export type CollisionBox = CollisionBoxStruct;

/**
 * @private
 */
export class CollisionBoxArray extends StructArrayLayout5i4f1i1ul2ui40 {
    /**
     * Return the CollisionBoxStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): CollisionBoxStruct {
        assert(index >= 0);
        assert(index < this.length);
        return new CollisionBoxStruct(this, index);
    }
}

register(CollisionBoxArray, 'CollisionBoxArray');

class PlacedSymbolStruct extends Struct {
    override _structArray: PlacedSymbolArray;
    get projectedAnchorX(): number { return this._structArray.int16[this._pos2 + 0]; }
    get projectedAnchorY(): number { return this._structArray.int16[this._pos2 + 1]; }
    get projectedAnchorZ(): number { return this._structArray.int16[this._pos2 + 2]; }
    get tileAnchorX(): number { return this._structArray.float32[this._pos4 + 2]; }
    get tileAnchorY(): number { return this._structArray.float32[this._pos4 + 3]; }
    get glyphStartIndex(): number { return this._structArray.uint16[this._pos2 + 8]; }
    get numGlyphs(): number { return this._structArray.uint16[this._pos2 + 9]; }
    get vertexStartIndex(): number { return this._structArray.uint32[this._pos4 + 5]; }
    get lineStartIndex(): number { return this._structArray.uint32[this._pos4 + 6]; }
    get lineLength(): number { return this._structArray.uint32[this._pos4 + 7]; }
    get segment(): number { return this._structArray.uint16[this._pos2 + 16]; }
    get lowerSize(): number { return this._structArray.uint16[this._pos2 + 17]; }
    get upperSize(): number { return this._structArray.uint16[this._pos2 + 18]; }
    get lineOffsetX(): number { return this._structArray.float32[this._pos4 + 10]; }
    get lineOffsetY(): number { return this._structArray.float32[this._pos4 + 11]; }
    get writingMode(): number { return this._structArray.uint8[this._pos1 + 48]; }
    get placedOrientation(): number { return this._structArray.uint8[this._pos1 + 49]; }
    set placedOrientation(x: number) { this._structArray.uint8[this._pos1 + 49] = x; }
    get hidden(): number { return this._structArray.uint8[this._pos1 + 50]; }
    set hidden(x: number) { this._structArray.uint8[this._pos1 + 50] = x; }
    get crossTileID(): number { return this._structArray.uint32[this._pos4 + 13]; }
    set crossTileID(x: number) { this._structArray.uint32[this._pos4 + 13] = x; }
    get associatedIconIndex(): number { return this._structArray.int16[this._pos2 + 28]; }
    get flipState(): number { return this._structArray.uint8[this._pos1 + 58]; }
    set flipState(x: number) { this._structArray.uint8[this._pos1 + 58] = x; }
}

PlacedSymbolStruct.prototype.size = 60;

export type PlacedSymbol = PlacedSymbolStruct;

/**
 * @private
 */
export class PlacedSymbolArray extends StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60 {
    /**
     * Return the PlacedSymbolStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): PlacedSymbolStruct {
        assert(index >= 0);
        assert(index < this.length);
        return new PlacedSymbolStruct(this, index);
    }
}

register(PlacedSymbolArray, 'PlacedSymbolArray');

class SymbolInstanceStruct extends Struct {
    override _structArray: SymbolInstanceArray;
    get tileAnchorX(): number { return this._structArray.float32[this._pos4 + 0]; }
    get tileAnchorY(): number { return this._structArray.float32[this._pos4 + 1]; }
    get projectedAnchorX(): number { return this._structArray.int16[this._pos2 + 4]; }
    get projectedAnchorY(): number { return this._structArray.int16[this._pos2 + 5]; }
    get projectedAnchorZ(): number { return this._structArray.int16[this._pos2 + 6]; }
    get rightJustifiedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 7]; }
    get centerJustifiedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 8]; }
    get leftJustifiedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 9]; }
    get verticalPlacedTextSymbolIndex(): number { return this._structArray.int16[this._pos2 + 10]; }
    get placedIconSymbolIndex(): number { return this._structArray.int16[this._pos2 + 11]; }
    get verticalPlacedIconSymbolIndex(): number { return this._structArray.int16[this._pos2 + 12]; }
    get key(): number { return this._structArray.uint16[this._pos2 + 13]; }
    get textBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 14]; }
    get textBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 15]; }
    get verticalTextBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 16]; }
    get verticalTextBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 17]; }
    get iconBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 18]; }
    get iconBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 19]; }
    get verticalIconBoxStartIndex(): number { return this._structArray.uint16[this._pos2 + 20]; }
    get verticalIconBoxEndIndex(): number { return this._structArray.uint16[this._pos2 + 21]; }
    get featureIndex(): number { return this._structArray.uint16[this._pos2 + 22]; }
    get numHorizontalGlyphVertices(): number { return this._structArray.uint16[this._pos2 + 23]; }
    get numVerticalGlyphVertices(): number { return this._structArray.uint16[this._pos2 + 24]; }
    get numIconVertices(): number { return this._structArray.uint16[this._pos2 + 25]; }
    get numVerticalIconVertices(): number { return this._structArray.uint16[this._pos2 + 26]; }
    get useRuntimeCollisionCircles(): number { return this._structArray.uint16[this._pos2 + 27]; }
    get crossTileID(): number { return this._structArray.uint32[this._pos4 + 14]; }
    set crossTileID(x: number) { this._structArray.uint32[this._pos4 + 14] = x; }
    get textOffset0(): number { return this._structArray.float32[this._pos4 + 15]; }
    get textOffset1(): number { return this._structArray.float32[this._pos4 + 16]; }
    get collisionCircleDiameter(): number { return this._structArray.float32[this._pos4 + 17]; }
    get zOffset(): number { return this._structArray.float32[this._pos4 + 18]; }
    set zOffset(x: number) { this._structArray.float32[this._pos4 + 18] = x; }
    get hasIconTextFit(): number { return this._structArray.uint8[this._pos1 + 76]; }
    get elevationFeatureIndex(): number { return this._structArray.uint16[this._pos2 + 39]; }
}

SymbolInstanceStruct.prototype.size = 80;

export type SymbolInstance = SymbolInstanceStruct;

/**
 * @private
 */
export class SymbolInstanceArray extends StructArrayLayout2f9i15ui1ul4f1ub1ui80 {
    /**
     * Return the SymbolInstanceStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): SymbolInstanceStruct {
        assert(index >= 0);
        assert(index < this.length);
        return new SymbolInstanceStruct(this, index);
    }
}

register(SymbolInstanceArray, 'SymbolInstanceArray');

/**
 * @private
 */
export class GlyphOffsetArray extends StructArrayLayout1f4 {
    getoffsetX(index: number): number { return this.float32[index * 1 + 0]; }
}

register(GlyphOffsetArray, 'GlyphOffsetArray');

/**
 * @private
 */
export class SymbolLineVertexArray extends StructArrayLayout2i4 {
    getx(index: number): number { return this.int16[index * 2 + 0]; }
    gety(index: number): number { return this.int16[index * 2 + 1]; }
}

register(SymbolLineVertexArray, 'SymbolLineVertexArray');

class FeatureIndexStruct extends Struct {
    override _structArray: FeatureIndexArray;
    get featureIndex(): number { return this._structArray.uint32[this._pos4 + 0]; }
    get sourceLayerIndex(): number { return this._structArray.uint16[this._pos2 + 2]; }
    get bucketIndex(): number { return this._structArray.uint16[this._pos2 + 3]; }
    get layoutVertexArrayOffset(): number { return this._structArray.uint16[this._pos2 + 4]; }
}

FeatureIndexStruct.prototype.size = 12;

export type FeatureIndex = FeatureIndexStruct;

/**
 * @private
 */
export class FeatureIndexArray extends StructArrayLayout1ul3ui12 {
    /**
     * Return the FeatureIndexStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): FeatureIndexStruct {
        assert(index >= 0);
        assert(index < this.length);
        return new FeatureIndexStruct(this, index);
    }
}

register(FeatureIndexArray, 'FeatureIndexArray');

/**
 * @private
 */
export class FillExtrusionCentroidArray extends StructArrayLayout2ui4 {
    geta_centroid_pos0(index: number): number { return this.uint16[index * 2 + 0]; }
    geta_centroid_pos1(index: number): number { return this.uint16[index * 2 + 1]; }
}

register(FillExtrusionCentroidArray, 'FillExtrusionCentroidArray');

class FillExtrusionWallStruct extends Struct {
    override _structArray: FillExtrusionWallArray;
    get a_join_normal_inside0(): number { return this._structArray.int16[this._pos2 + 0]; }
    get a_join_normal_inside1(): number { return this._structArray.int16[this._pos2 + 1]; }
    get a_join_normal_inside2(): number { return this._structArray.int16[this._pos2 + 2]; }
}

FillExtrusionWallStruct.prototype.size = 6;

export type FillExtrusionWall = FillExtrusionWallStruct;

/**
 * @private
 */
export class FillExtrusionWallArray extends StructArrayLayout3i6 {
    /**
     * Return the FillExtrusionWallStruct at the given location in the array.
     * @param {number} index The index of the element.
     * @private
     */
    get(index: number): FillExtrusionWallStruct {
        assert(index >= 0);
        assert(index < this.length);
        return new FillExtrusionWallStruct(this, index);
    }
}

register(FillExtrusionWallArray, 'FillExtrusionWallArray');

export {
    StructArrayLayout2i4,
    StructArrayLayout3i6,
    StructArrayLayout4i8,
    StructArrayLayout1f4,
    StructArrayLayout2i1f8,
    StructArrayLayout3i8,
    StructArrayLayout5i10,
    StructArrayLayout2i4ub1f12,
    StructArrayLayout3f12,
    StructArrayLayout4ui1f12,
    StructArrayLayout4ui8,
    StructArrayLayout6i12,
    StructArrayLayout4i4ui4i24,
    StructArrayLayout3i3f20,
    StructArrayLayout4f16,
    StructArrayLayout1ul4,
    StructArrayLayout2ui4,
    StructArrayLayout5i4f1i1ul2ui40,
    StructArrayLayout3i2i2i16,
    StructArrayLayout2f1f2i16,
    StructArrayLayout2ub4f20,
    StructArrayLayout3ui6,
    StructArrayLayout3i2f2ui3ul3ui2f3ub1ul1i1ub60,
    StructArrayLayout2f9i15ui1ul4f1ub1ui80,
    StructArrayLayout6f24,
    StructArrayLayout5f20,
    StructArrayLayout7f28,
    StructArrayLayout11f44,
    StructArrayLayout9f36,
    StructArrayLayout2f8,
    StructArrayLayout1ul3ui12,
    StructArrayLayout1ui2,
    StructArrayLayout16f64,
    StructArrayLayout4ui3f20,
    StructArrayLayout1i2,
    StructArrayLayout1ub1,
    StructArrayLayout2i4 as PosArray,
    StructArrayLayout3i6 as PosGlobeExtArray,
    StructArrayLayout4i8 as RasterBoundsArray,
    StructArrayLayout2i4 as CircleLayoutArray,
    StructArrayLayout1f4 as CircleExtLayoutArray,
    StructArrayLayout2i4 as FillLayoutArray,
    StructArrayLayout1f4 as FillExtLayoutArray,
    StructArrayLayout2i1f8 as FillIntersectionsLayoutArray,
    StructArrayLayout3i8 as FillIntersectionsNormalLayoutArray,
    StructArrayLayout4i8 as FillExtrusionLayoutArray,
    StructArrayLayout5i10 as FillExtrusionGroundLayoutArray,
    StructArrayLayout2i4 as HeatmapLayoutArray,
    StructArrayLayout2i4ub1f12 as LineLayoutArray,
    StructArrayLayout3f12 as LineExtLayoutArray,
    StructArrayLayout3f12 as LinePatternLayoutArray,
    StructArrayLayout4ui1f12 as PatternLayoutArray,
    StructArrayLayout4ui8 as DashLayoutArray,
    StructArrayLayout6i12 as FillExtrusionExtArray,
    StructArrayLayout4i4ui4i24 as SymbolLayoutArray,
    StructArrayLayout3i3f20 as SymbolGlobeExtArray,
    StructArrayLayout4f16 as SymbolDynamicLayoutArray,
    StructArrayLayout1ul4 as SymbolOpacityArray,
    StructArrayLayout2ui4 as SymbolIconTransitioningArray,
    StructArrayLayout3i2i2i16 as CollisionBoxLayoutArray,
    StructArrayLayout2f1f2i16 as CollisionCircleLayoutArray,
    StructArrayLayout2ub4f20 as CollisionVertexArray,
    StructArrayLayout4f16 as CollisionVertexExtArray,
    StructArrayLayout3ui6 as QuadTriangleArray,
    StructArrayLayout1f4 as ZOffsetVertexArray,
    StructArrayLayout6f24 as SymbolOrientationArray,
    StructArrayLayout5f20 as GlobeVertexArray,
    StructArrayLayout5f20 as AtmosphereVertexArray,
    StructArrayLayout7f28 as StarsVertexArray,
    StructArrayLayout11f44 as SnowVertexArray,
    StructArrayLayout9f36 as RainVertexArray,
    StructArrayLayout2f8 as VignetteVertexArray,
    StructArrayLayout3ui6 as TriangleIndexArray,
    StructArrayLayout2ui4 as LineIndexArray,
    StructArrayLayout1ui2 as LineStripIndexArray,
    StructArrayLayout3f12 as LineZOffsetExtArray,
    StructArrayLayout3f12 as SkyboxVertexArray,
    StructArrayLayout4i8 as TileBoundsArray,
    StructArrayLayout3f12 as ModelLayoutArray,
    StructArrayLayout3f12 as Color3fLayoutArray,
    StructArrayLayout4f16 as Color4fLayoutArray,
    StructArrayLayout2f8 as TexcoordLayoutArray,
    StructArrayLayout3f12 as NormalLayoutArray,
    StructArrayLayout16f64 as InstanceVertexArray,
    StructArrayLayout4ui3f20 as FeatureVertexArray,
    StructArrayLayout1i2 as ParticleIndexLayoutArray,
    StructArrayLayout1ub1 as FillExtrusionHiddenByLandmarkArray,
    StructArrayLayout3f12 as BuildingPositionArray,
    StructArrayLayout3i6 as BuildingNormalArray,
    StructArrayLayout2ui4 as BuildingColorArray,
    StructArrayLayout4f16 as BuildingBloomAttenuationArray,
    StructArrayLayout6i12 as CircleGlobeExtArray
};
