import type { TEXTURE_FORMATS } from '../../rendering/renderers/shared/texture/const';
export declare enum GL_INTERNAL_FORMAT {
    RGBA8_SNORM = 36759,
    RGBA = 6408,
    RGBA8UI = 36220,
    SRGB8_ALPHA8 = 35907,
    RGBA8I = 36238,
    RGBA8 = 32856,
    COMPRESSED_RGB_S3TC_DXT1_EXT = 33776,
    COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777,
    COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778,
    COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779,
    COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917,
    COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918,
    COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919,
    COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916,
    COMPRESSED_RED_RGTC1_EXT = 36283,
    COMPRESSED_SIGNED_RED_RGTC1_EXT = 36284,
    COMPRESSED_RED_GREEN_RGTC2_EXT = 36285,
    COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT = 36286,
    COMPRESSED_R11_EAC = 37488,
    COMPRESSED_SIGNED_R11_EAC = 37489,
    COMPRESSED_RG11_EAC = 37490,
    COMPRESSED_SIGNED_RG11_EAC = 37491,
    COMPRESSED_RGB8_ETC2 = 37492,
    COMPRESSED_RGBA8_ETC2_EAC = 37496,
    COMPRESSED_SRGB8_ETC2 = 37493,
    COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497,
    COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494,
    COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495,
    COMPRESSED_RGBA_ASTC_4x4_KHR = 37808,
    COMPRESSED_RGBA_ASTC_5x4_KHR = 37809,
    COMPRESSED_RGBA_ASTC_5x5_KHR = 37810,
    COMPRESSED_RGBA_ASTC_6x5_KHR = 37811,
    COMPRESSED_RGBA_ASTC_6x6_KHR = 37812,
    COMPRESSED_RGBA_ASTC_8x5_KHR = 37813,
    COMPRESSED_RGBA_ASTC_8x6_KHR = 37814,
    COMPRESSED_RGBA_ASTC_8x8_KHR = 37815,
    COMPRESSED_RGBA_ASTC_10x5_KHR = 37816,
    COMPRESSED_RGBA_ASTC_10x6_KHR = 37817,
    COMPRESSED_RGBA_ASTC_10x8_KHR = 37818,
    COMPRESSED_RGBA_ASTC_10x10_KHR = 37819,
    COMPRESSED_RGBA_ASTC_12x10_KHR = 37820,
    COMPRESSED_RGBA_ASTC_12x12_KHR = 37821,
    COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840,
    COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841,
    COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842,
    COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843,
    COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844,
    COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845,
    COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846,
    COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851,
    COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852,
    COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853,
    COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492,
    COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493,
    COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494,
    COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495
}
export declare const KTX: {
    FILE_HEADER_SIZE: number;
    FILE_IDENTIFIER: number[];
    FORMATS_TO_COMPONENTS: {
        [id: number]: number;
    };
    INTERNAL_FORMAT_TO_BYTES_PER_PIXEL: {
        [id: number]: number;
    };
    INTERNAL_FORMAT_TO_TEXTURE_FORMATS: {
        [id: number]: TEXTURE_FORMATS;
    };
    FIELDS: {
        FILE_IDENTIFIER: number;
        ENDIANNESS: number;
        GL_TYPE: number;
        GL_TYPE_SIZE: number;
        GL_FORMAT: number;
        GL_INTERNAL_FORMAT: number;
        GL_BASE_INTERNAL_FORMAT: number;
        PIXEL_WIDTH: number;
        PIXEL_HEIGHT: number;
        PIXEL_DEPTH: number;
        NUMBER_OF_ARRAY_ELEMENTS: number;
        NUMBER_OF_FACES: number;
        NUMBER_OF_MIPMAP_LEVELS: number;
        BYTES_OF_KEY_VALUE_DATA: number;
    };
    TYPES_TO_BYTES_PER_COMPONENT: {
        [id: number]: number;
    };
    TYPES_TO_BYTES_PER_PIXEL: {
        [id: number]: number;
    };
    ENDIANNESS: number;
};