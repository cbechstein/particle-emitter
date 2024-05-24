import type { Batch, BatchableObject, Batcher } from '../../../rendering/batcher/shared/Batcher';
import type { IndexBufferArray } from '../../../rendering/renderers/shared/geometry/Geometry';
import type { Texture } from '../../../rendering/renderers/shared/texture/Texture';
import type { Container } from '../../container/Container';
import type { MeshGeometry } from './MeshGeometry';
/**
 * A batchable mesh object.
 * @ignore
 */
export declare class BatchableMesh implements BatchableObject {
    indexStart: number;
    textureId: number;
    texture: Texture;
    location: number;
    batcher: Batcher;
    batch: Batch;
    mesh: Container;
    geometry: MeshGeometry;
    roundPixels: 0 | 1;
    private _transformedUvs;
    private _uvUpdateId;
    private _textureMatrixUpdateId;
    get blendMode(): import("../../..").BLEND_MODES;
    reset(): void;
    packIndex(indexBuffer: IndexBufferArray, index: number, indicesOffset: number): void;
    packAttributes(float32View: Float32Array, uint32View: Uint32Array, index: number, textureId: number): void;
    get vertexSize(): number;
    get indexSize(): number;
}