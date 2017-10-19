// Definitions by: Arthur Dam <https://github.com/arthurjdam>

declare module 'nooocl' {
    interface CLDefinition {
        CL_SUCCESS: 0,
        CL_DEVICE_NOT_FOUND: -1,
        CL_DEVICE_NOT_AVAILABLE: -2,
        CL_COMPILER_NOT_AVAILABLE: -3,
        CL_MEM_OBJECT_ALLOCATION_FAILURE: -4,
        CL_OUT_OF_RESOURCES: -5,
        CL_OUT_OF_HOST_MEMORY: -6,
        CL_PROFILING_INFO_NOT_AVAILABLE: -7,
        CL_MEM_COPY_OVERLAP: -8,
        CL_IMAGE_FORMAT_MISMATCH: -9,
        CL_IMAGE_FORMAT_NOT_SUPPORTED: -10,
        CL_BUILD_PROGRAM_FAILURE: -11,
        CL_MAP_FAILURE: -12,
        CL_MISALIGNED_SUB_BUFFER_OFFSET: -13,
        CL_EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST: -14,
        CL_COMPILE_PROGRAM_FAILURE: -15,
        CL_LINKER_NOT_AVAILABLE: -16,
        CL_LINK_PROGRAM_FAILURE: -17,
        CL_DEVICE_PARTITION_FAILED: -18,
        CL_KERNEL_ARG_INFO_NOT_AVAILABLE: -19,
        CL_INVALID_VALUE: -30,
        CL_INVALID_DEVICE_TYPE: -31,
        CL_INVALID_PLATFORM: -32,
        CL_INVALID_DEVICE: -33,
        CL_INVALID_CONTEXT: -34,
        CL_INVALID_QUEUE_PROPERTIES: -35,
        CL_INVALID_COMMAND_QUEUE: -36,
        CL_INVALID_HOST_PTR: -37,
        CL_INVALID_MEM_OBJECT: -38,
        CL_INVALID_IMAGE_FORMAT_DESCRIPTOR: -39,
        CL_INVALID_IMAGE_SIZE: -40,
        CL_INVALID_SAMPLER: -41,
        CL_INVALID_BINARY: -42,
        CL_INVALID_BUILD_OPTIONS: -43,
        CL_INVALID_PROGRAM: -44,
        CL_INVALID_PROGRAM_EXECUTABLE: -45,
        CL_INVALID_KERNEL_NAME: -46,
        CL_INVALID_KERNEL_DEFINITION: -47,
        CL_INVALID_KERNEL: -48,
        CL_INVALID_ARG_INDEX: -49,
        CL_INVALID_ARG_VALUE: -50,
        CL_INVALID_ARG_SIZE: -51,
        CL_INVALID_KERNEL_ARGS: -52,
        CL_INVALID_WORK_DIMENSION: -53,
        CL_INVALID_WORK_GROUP_SIZE: -54,
        CL_INVALID_WORK_ITEM_SIZE: -55,
        CL_INVALID_GLOBAL_OFFSET: -56,
        CL_INVALID_EVENT_WAIT_LIST: -57,
        CL_INVALID_EVENT: -58,
        CL_INVALID_OPERATION: -59,
        CL_INVALID_GL_OBJECT: -60,
        CL_INVALID_BUFFER_SIZE: -61,
        CL_INVALID_MIP_LEVEL: -62,
        CL_INVALID_GLOBAL_WORK_SIZE: -63,
        CL_INVALID_PROPERTY: -64,
        CL_INVALID_IMAGE_DESCRIPTOR: -65,
        CL_INVALID_COMPILER_OPTIONS: -66,
        CL_INVALID_LINKER_OPTIONS: -67,
        CL_INVALID_DEVICE_PARTITION_COUNT: -68,
        /* ###OpenCL Version */
        CL_VERSION_1_0: 1,
        CL_VERSION_1_1: 1,
        CL_VERSION_1_2: 1,
        /* ###cl_bool */
        CL_FALSE: 0,
        CL_TRUE: 1,
        CL_BLOCKING: 1,
        CL_NON_BLOCKING: 0,
        /* ###cl_platform_info */
        CL_PLATFORM_PROFILE: 0x0900,
        CL_PLATFORM_VERSION: 0x0901,
        CL_PLATFORM_NAME: 0x0902,
        CL_PLATFORM_VENDOR: 0x0903,
        CL_PLATFORM_EXTENSIONS: 0x0904,
        /* ### cl_device_type - Bitfield */
        CL_DEVICE_TYPE_DEFAULT: 1,
        CL_DEVICE_TYPE_CPU: 2,
        CL_DEVICE_TYPE_GPU: 4,
        CL_DEVICE_TYPE_ACCELERATOR: 8,
        CL_DEVICE_TYPE_CUSTOM: 16,
        CL_DEVICE_TYPE_ALL: 0xFFFFFFFF,
        /* ### cl_device_info */
        CL_DEVICE_TYPE: 0x1000,
        CL_DEVICE_VENDOR_ID: 0x1001,
        CL_DEVICE_MAX_COMPUTE_UNITS: 0x1002,
        CL_DEVICE_MAX_WORK_ITEM_DIMENSIONS: 0x1003,
        CL_DEVICE_MAX_WORK_GROUP_SIZE: 0x1004,
        CL_DEVICE_MAX_WORK_ITEM_SIZES: 0x1005,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_CHAR: 0x1006,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_SHORT: 0x1007,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_INT: 0x1008,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_LONG: 0x1009,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT: 0x100A,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_DOUBLE: 0x100B,
        CL_DEVICE_MAX_CLOCK_FREQUENCY: 0x100C,
        CL_DEVICE_ADDRESS_BITS: 0x100D,
        CL_DEVICE_MAX_READ_IMAGE_ARGS: 0x100E,
        CL_DEVICE_MAX_WRITE_IMAGE_ARGS: 0x100F,
        CL_DEVICE_MAX_MEM_ALLOC_SIZE: 0x1010,
        CL_DEVICE_IMAGE2D_MAX_WIDTH: 0x1011,
        CL_DEVICE_IMAGE2D_MAX_HEIGHT: 0x1012,
        CL_DEVICE_IMAGE3D_MAX_WIDTH: 0x1013,
        CL_DEVICE_IMAGE3D_MAX_HEIGHT: 0x1014,
        CL_DEVICE_IMAGE3D_MAX_DEPTH: 0x1015,
        CL_DEVICE_IMAGE_SUPPORT: 0x1016,
        CL_DEVICE_MAX_PARAMETER_SIZE: 0x1017,
        CL_DEVICE_MAX_SAMPLERS: 0x1018,
        CL_DEVICE_MEM_BASE_ADDR_ALIGN: 0x1019,
        CL_DEVICE_MIN_DATA_TYPE_ALIGN_SIZE: 0x101A,
        CL_DEVICE_SINGLE_FP_CONFIG: 0x101B,
        CL_DEVICE_GLOBAL_MEM_CACHE_TYPE: 0x101C,
        CL_DEVICE_GLOBAL_MEM_CACHELINE_SIZE: 0x101D,
        CL_DEVICE_GLOBAL_MEM_CACHE_SIZE: 0x101E,
        CL_DEVICE_GLOBAL_MEM_SIZE: 0x101F,
        CL_DEVICE_MAX_CONSTANT_BUFFER_SIZE: 0x1020,
        CL_DEVICE_MAX_CONSTANT_ARGS: 0x1021,
        CL_DEVICE_LOCAL_MEM_TYPE: 0x1022,
        CL_DEVICE_LOCAL_MEM_SIZE: 0x1023,
        CL_DEVICE_ERROR_CORRECTION_SUPPORT: 0x1024,
        CL_DEVICE_PROFILING_TIMER_RESOLUTION: 0x1025,
        CL_DEVICE_ENDIAN_LITTLE: 0x1026,
        CL_DEVICE_AVAILABLE: 0x1027,
        CL_DEVICE_COMPILER_AVAILABLE: 0x1028,
        CL_DEVICE_EXECUTION_CAPABILITIES: 0x1029,
        CL_DEVICE_QUEUE_PROPERTIES: 0x102A,
        CL_DEVICE_NAME: 0x102B,
        CL_DEVICE_VENDOR: 0x102C,
        CL_DRIVER_VERSION: 0x102D,
        CL_DEVICE_PROFILE: 0x102E,
        CL_DEVICE_VERSION: 0x102F,
        CL_DEVICE_EXTENSIONS: 0x1030,
        CL_DEVICE_PLATFORM: 0x1031,
        CL_DEVICE_DOUBLE_FP_CONFIG: 0x1032,
        /* 0x1033 reserved for CL_DEVICE_HALF_FP_CONFIG */
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_HALF: 0x1034,
        CL_DEVICE_HOST_UNIFIED_MEMORY: 0x1035,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_CHAR: 0x1036,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_SHORT: 0x1037,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_INT: 0x1038,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_LONG: 0x1039,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_FLOAT: 0x103A,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_DOUBLE: 0x103B,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_HALF: 0x103C,
        CL_DEVICE_OPENCL_C_VERSION: 0x103D,
        CL_DEVICE_LINKER_AVAILABLE: 0x103E,
        CL_DEVICE_BUILT_IN_KERNELS: 0x103F,
        CL_DEVICE_IMAGE_MAX_BUFFER_SIZE: 0x1040,
        CL_DEVICE_IMAGE_MAX_ARRAY_SIZE: 0x1041,
        CL_DEVICE_PARENT_DEVICE: 0x1042,
        CL_DEVICE_PARTITION_MAX_SUB_DEVICES: 0x1043,
        CL_DEVICE_PARTITION_PROPERTIES: 0x1044,
        CL_DEVICE_PARTITION_AFFINITY_DOMAIN: 0x1045,
        CL_DEVICE_PARTITION_TYPE: 0x1046,
        CL_DEVICE_REFERENCE_COUNT: 0x1047,
        CL_DEVICE_PREFERRED_INTEROP_USER_SYNC: 0x1048,
        CL_DEVICE_PRINTF_BUFFER_SIZE: 0x1049,
        CL_DEVICE_IMAGE_PITCH_ALIGNMENT: 0x104A,
        CL_DEVICE_IMAGE_BASE_ADDRESS_ALIGNMENT: 0x104B,
        /* ### cl_device_fp_config - Bitfield */
        CL_FP_DENORM: 1,
        CL_FP_INF_NAN: 2,
        CL_FP_ROUND_TO_NEAREST: 4,
        CL_FP_ROUND_TO_ZERO: 8,
        CL_FP_ROUND_TO_INF: 16,
        CL_FP_FMA: 32,
        CL_FP_SOFT_FLOAT: 64,
        CL_FP_CORRECTLY_ROUNDED_DIVIDE_SQRT: 128,
        /* ### cl_device_mem_cache_type */
        CL_NONE: 0x0,
        CL_READ_ONLY_CACHE: 0x1,
        CL_READ_WRITE_CACHE: 0x2,
        /* ### cl_device_local_mem_type */
        CL_LOCAL: 0x1,
        CL_GLOBAL: 0x2,
        /* ### cl_device_exec_capabilities - Bitfield */
        CL_EXEC_KERNEL: 1,
        CL_EXEC_NATIVE_KERNEL: 2,
        /* ### cl_command_queue_properties - Bitfield */
        CL_QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE: 1,
        CL_QUEUE_PROFILING_ENABLE: 2,
        /* ### cl_context_info  */
        CL_CONTEXT_REFERENCE_COUNT: 0x1080,
        CL_CONTEXT_DEVICES: 0x1081,
        CL_CONTEXT_PROPERTIES: 0x1082,
        CL_CONTEXT_NUM_DEVICES: 0x1083,
        /* ### cl_context_properties */
        CL_CONTEXT_PLATFORM: 0x1084,
        CL_CONTEXT_INTEROP_USER_SYNC: 0x1085,
        /* ### cl_device_partition_property */
        CL_DEVICE_PARTITION_EQUALLY: 0x1086,
        CL_DEVICE_PARTITION_BY_COUNTS: 0x1087,
        CL_DEVICE_PARTITION_BY_COUNTS_LIST_END: 0x0,
        CL_DEVICE_PARTITION_BY_AFFINITY_DOMAIN: 0x1088,
        /* ### cl_device_affinity_domain */
        CL_DEVICE_AFFINITY_DOMAIN_NUMA: 1,
        CL_DEVICE_AFFINITY_DOMAIN_L4_CACHE: 2,
        CL_DEVICE_AFFINITY_DOMAIN_L3_CACHE: 4,
        CL_DEVICE_AFFINITY_DOMAIN_L2_CACHE: 8,
        CL_DEVICE_AFFINITY_DOMAIN_L1_CACHE: 16,
        CL_DEVICE_AFFINITY_DOMAIN_NEXT_PARTITIONABLE: 32,
        /* ### cl_command_queue_info */
        CL_QUEUE_CONTEXT: 0x1090,
        CL_QUEUE_DEVICE: 0x1091,
        CL_QUEUE_REFERENCE_COUNT: 0x1092,
        CL_QUEUE_PROPERTIES: 0x1093,
        /* ### cl_mem_flags - Bitfield */
        CL_MEM_READ_WRITE: 1,
        CL_MEM_WRITE_ONLY: 2,
        CL_MEM_READ_ONLY: 4,
        CL_MEM_USE_HOST_PTR: 8,
        CL_MEM_ALLOC_HOST_PTR: 16,
        CL_MEM_COPY_HOST_PTR: 32,
        CL_MEM_HOST_WRITE_ONLY: 128,
        CL_MEM_HOST_READ_ONLY: 256,
        CL_MEM_HOST_NO_ACCESS: 512,
        // /* ### cl_mem_migration_flags - Bitfield */
        CL_MIGRATE_MEM_OBJECT_HOST: 1,
        CL_MIGRATE_MEM_OBJECT_CONTENT_UNDEFINED: 2,
        /* ### cl_channel_order */
        CL_R: 0x10B0,
        CL_A: 0x10B1,
        CL_RG: 0x10B2,
        CL_RA: 0x10B3,
        CL_RGB: 0x10B4,
        CL_RGBA: 0x10B5,
        CL_BGRA: 0x10B6,
        CL_ARGB: 0x10B7,
        CL_INTENSITY: 0x10B8,
        CL_LUMINANCE: 0x10B9,
        CL_Rx: 0x10BA,
        CL_RGx: 0x10BB,
        CL_RGBx: 0x10BC,
        CL_DEPTH: 0x10BD,
        CL_DEPTH_STENCIL: 0x10BE,
        /* ### cl_channel_type */
        CL_SNORM_INT8: 0x10D0,
        CL_SNORM_INT16: 0x10D1,
        CL_UNORM_INT8: 0x10D2,
        CL_UNORM_INT16: 0x10D3,
        CL_UNORM_SHORT_565: 0x10D4,
        CL_UNORM_SHORT_555: 0x10D5,
        CL_UNORM_INT_101010: 0x10D6,
        CL_SIGNED_INT8: 0x10D7,
        CL_SIGNED_INT16: 0x10D8,
        CL_SIGNED_INT32: 0x10D9,
        CL_UNSIGNED_INT8: 0x10DA,
        CL_UNSIGNED_INT16: 0x10DB,
        CL_UNSIGNED_INT32: 0x10DC,
        CL_HALF_FLOAT: 0x10DD,
        CL_FLOAT: 0x10DE,
        CL_UNORM_INT24: 0x10DF,
        /* ### cl_mem_object_type */
        CL_MEM_OBJECT_BUFFER: 0x10F0,
        CL_MEM_OBJECT_IMAGE2D: 0x10F1,
        CL_MEM_OBJECT_IMAGE3D: 0x10F2,
        CL_MEM_OBJECT_IMAGE2D_ARRAY: 0x10F3,
        CL_MEM_OBJECT_IMAGE1D: 0x10F4,
        CL_MEM_OBJECT_IMAGE1D_ARRAY: 0x10F5,
        CL_MEM_OBJECT_IMAGE1D_BUFFER: 0x10F6,
        /* ### cl_mem_info */
        CL_MEM_TYPE: 0x1100,
        CL_MEM_FLAGS: 0x1101,
        CL_MEM_SIZE: 0x1102,
        CL_MEM_HOST_PTR: 0x1103,
        CL_MEM_MAP_COUNT: 0x1104,
        CL_MEM_REFERENCE_COUNT: 0x1105,
        CL_MEM_CONTEXT: 0x1106,
        CL_MEM_ASSOCIATED_MEMOBJECT: 0x1107,
        CL_MEM_OFFSET: 0x1108,
        /* ### cl_image_info */
        CL_IMAGE_FORMAT: 0x1110,
        CL_IMAGE_ELEMENT_SIZE: 0x1111,
        CL_IMAGE_ROW_PITCH: 0x1112,
        CL_IMAGE_SLICE_PITCH: 0x1113,
        CL_IMAGE_WIDTH: 0x1114,
        CL_IMAGE_HEIGHT: 0x1115,
        CL_IMAGE_DEPTH: 0x1116,
        CL_IMAGE_ARRAY_SIZE: 0x1117,
        CL_IMAGE_BUFFER: 0x1118,
        CL_IMAGE_NUM_MIP_LEVELS: 0x1119,
        CL_IMAGE_NUM_SAMPLES: 0x111A,
        /* ### cl_addressing_mode */
        CL_ADDRESS_NONE: 0x1130,
        CL_ADDRESS_CLAMP_TO_EDGE: 0x1131,
        CL_ADDRESS_CLAMP: 0x1132,
        CL_ADDRESS_REPEAT: 0x1133,
        CL_ADDRESS_MIRRORED_REPEAT: 0x1134,
        /* ### cl_filter_mode */
        CL_FILTER_NEAREST: 0x1140,
        CL_FILTER_LINEAR: 0x1141,
        /* ### cl_sampler_info */
        CL_SAMPLER_REFERENCE_COUNT: 0x1150,
        CL_SAMPLER_CONTEXT: 0x1151,
        CL_SAMPLER_NORMALIZED_COORDS: 0x1152,
        CL_SAMPLER_ADDRESSING_MODE: 0x1153,
        CL_SAMPLER_FILTER_MODE: 0x1154,
        /* ### cl_map_flags - Bitfield */
        CL_MAP_READ: 1,
        CL_MAP_WRITE: 2,
        CL_MAP_WRITE_INVALIDATE_REGION: 4,
        /* ### cl_program_info */
        CL_PROGRAM_REFERENCE_COUNT: 0x1160,
        CL_PROGRAM_CONTEXT: 0x1161,
        CL_PROGRAM_NUM_DEVICES: 0x1162,
        CL_PROGRAM_DEVICES: 0x1163,
        CL_PROGRAM_SOURCE: 0x1164,
        CL_PROGRAM_BINARY_SIZES: 0x1165,
        CL_PROGRAM_BINARIES: 0x1166,
        CL_PROGRAM_NUM_KERNELS: 0x1167,
        CL_PROGRAM_KERNEL_NAMES: 0x1168,
        /* ### cl_program_build_info */
        CL_PROGRAM_BUILD_STATUS: 0x1181,
        CL_PROGRAM_BUILD_OPTIONS: 0x1182,
        CL_PROGRAM_BUILD_LOG: 0x1183,
        CL_PROGRAM_BINARY_TYPE: 0x1184,
        /* ### cl_program_binary_type */
        CL_PROGRAM_BINARY_TYPE_NONE: 0x0,
        CL_PROGRAM_BINARY_TYPE_COMPILED_OBJECT: 0x1,
        CL_PROGRAM_BINARY_TYPE_LIBRARY: 0x2,
        CL_PROGRAM_BINARY_TYPE_EXECUTABLE: 0x4,
        /* ### cl_build_status */
        CL_BUILD_SUCCESS: 0,
        CL_BUILD_NONE: -1,
        CL_BUILD_ERROR: -2,
        CL_BUILD_IN_PROGRESS: -3,
        /* ### cl_kernel_info */
        CL_KERNEL_FUNCTION_NAME: 0x1190,
        CL_KERNEL_NUM_ARGS: 0x1191,
        CL_KERNEL_REFERENCE_COUNT: 0x1192,
        CL_KERNEL_CONTEXT: 0x1193,
        CL_KERNEL_PROGRAM: 0x1194,
        CL_KERNEL_ATTRIBUTES: 0x1195,
        /* ### cl_kernel_arg_info */
        CL_KERNEL_ARG_ADDRESS_QUALIFIER: 0x1196,
        CL_KERNEL_ARG_ACCESS_QUALIFIER: 0x1197,
        CL_KERNEL_ARG_TYPE_NAME: 0x1198,
        CL_KERNEL_ARG_TYPE_QUALIFIER: 0x1199,
        CL_KERNEL_ARG_NAME: 0x119A,
        /* ### cl_kernel_arg_address_qualifier */
        CL_KERNEL_ARG_ADDRESS_GLOBAL: 0x119B,
        CL_KERNEL_ARG_ADDRESS_LOCAL: 0x119C,
        CL_KERNEL_ARG_ADDRESS_CONSTANT: 0x119D,
        CL_KERNEL_ARG_ADDRESS_PRIVATE: 0x119E,
        /* ### cl_kernel_arg_access_qualifier */
        CL_KERNEL_ARG_ACCESS_READ_ONLY: 0x11A0,
        CL_KERNEL_ARG_ACCESS_WRITE_ONLY: 0x11A1,
        CL_KERNEL_ARG_ACCESS_READ_WRITE: 0x11A2,
        CL_KERNEL_ARG_ACCESS_NONE: 0x11A3,
        /* ### cl_kernel_arg_type_qualifer */
        CL_KERNEL_ARG_TYPE_NONE: 0,
        CL_KERNEL_ARG_TYPE_CONST: 1,
        CL_KERNEL_ARG_TYPE_RESTRICT: 2,
        CL_KERNEL_ARG_TYPE_VOLATILE: 4,
        /* ### cl_kernel_work_group_info */
        CL_KERNEL_WORK_GROUP_SIZE: 0x11B0,
        CL_KERNEL_COMPILE_WORK_GROUP_SIZE: 0x11B1,
        CL_KERNEL_LOCAL_MEM_SIZE: 0x11B2,
        CL_KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE: 0x11B3,
        CL_KERNEL_PRIVATE_MEM_SIZE: 0x11B4,
        CL_KERNEL_GLOBAL_WORK_SIZE: 0x11B5,
        /* ### cl_event_info  */
        CL_EVENT_COMMAND_QUEUE: 0x11D0,
        CL_EVENT_COMMAND_TYPE: 0x11D1,
        CL_EVENT_REFERENCE_COUNT: 0x11D2,
        CL_EVENT_COMMAND_EXECUTION_STATUS: 0x11D3,
        CL_EVENT_CONTEXT: 0x11D4,
        /* ### cl_command_type */
        CL_COMMAND_NDRANGE_KERNEL: 0x11F0,
        CL_COMMAND_TASK: 0x11F1,
        CL_COMMAND_NATIVE_KERNEL: 0x11F2,
        CL_COMMAND_READ_BUFFER: 0x11F3,
        CL_COMMAND_WRITE_BUFFER: 0x11F4,
        CL_COMMAND_COPY_BUFFER: 0x11F5,
        CL_COMMAND_READ_IMAGE: 0x11F6,
        CL_COMMAND_WRITE_IMAGE: 0x11F7,
        CL_COMMAND_COPY_IMAGE: 0x11F8,
        CL_COMMAND_COPY_IMAGE_TO_BUFFER: 0x11F9,
        CL_COMMAND_COPY_BUFFER_TO_IMAGE: 0x11FA,
        CL_COMMAND_MAP_BUFFER: 0x11FB,
        CL_COMMAND_MAP_IMAGE: 0x11FC,
        CL_COMMAND_UNMAP_MEM_OBJECT: 0x11FD,
        CL_COMMAND_MARKER: 0x11FE,
        CL_COMMAND_ACQUIRE_GL_OBJECTS: 0x11FF,
        CL_COMMAND_RELEASE_GL_OBJECTS: 0x1200,
        CL_COMMAND_READ_BUFFER_RECT: 0x1201,
        CL_COMMAND_WRITE_BUFFER_RECT: 0x1202,
        CL_COMMAND_COPY_BUFFER_RECT: 0x1203,
        CL_COMMAND_USER: 0x1204,
        CL_COMMAND_BARRIER: 0x1205,
        CL_COMMAND_MIGRATE_MEM_OBJECTS: 0x1206,
        CL_COMMAND_FILL_BUFFER: 0x1207,
        CL_COMMAND_FILL_IMAGE: 0x1208,
        /* ### command execution status */
        CL_COMPLETE: 0x0,
        CL_RUNNING: 0x1,
        CL_SUBMITTED: 0x2,
        CL_QUEUED: 0x3,
        /* ### cl_buffer_create_type  */
        CL_BUFFER_CREATE_TYPE_REGION: 0x1220,
        /* ### cl_profiling_info  */
        CL_PROFILING_COMMAND_QUEUED: 0x1280,
        CL_PROFILING_COMMAND_SUBMIT: 0x1281,
        CL_PROFILING_COMMAND_START: 0x1282,
        CL_PROFILING_COMMAND_END: 0x1283,

        CL_DEVICE_COMPUTE_CAPABILITY_MAJOR_NV: 0x4000,
        CL_DEVICE_COMPUTE_CAPABILITY_MINOR_NV: 0x4001,
        CL_DEVICE_REGISTERS_PER_BLOCK_NV: 0x4002,
        CL_DEVICE_WARP_SIZE_NV: 0x4003,
        CL_DEVICE_GPU_OVERLAP_NV: 0x4004,
        CL_DEVICE_KERNEL_EXEC_TIMEOUT_NV: 0x4005,
        CL_DEVICE_INTEGRATED_MEMORY_NV: 0x4006,

        CL_DEVICE_GLOBAL_FREE_MEMORY_AMD: 0x4039,
        CL_DEVICE_SIMD_PER_COMPUTE_UNIT_AMD: 0x4040,
        CL_DEVICE_SIMD_WIDTH_AMD: 0x4041,
        CL_DEVICE_SIMD_INSTRUCTION_WIDTH_AMD: 0x4042,
        CL_DEVICE_WAVEFRONT_WIDTH_AMD: 0x4043,
        CL_DEVICE_GLOBAL_MEM_CHANNELS_AMD: 0x4044,
        CL_DEVICE_GLOBAL_MEM_CHANNEL_BANKS_AMD: 0x4045,
        CL_DEVICE_GLOBAL_MEM_CHANNEL_BANK_WIDTH_AMD: 0x4046,
        CL_DEVICE_LOCAL_MEM_SIZE_PER_COMPUTE_UNIT_AMD: 0x4047,
        CL_DEVICE_LOCAL_MEM_BANKS_AMD: 0x4048
    }

    enum types {
        ImageFormat,
        ImageFormatArray,
        ImageFormatRef,
        ImageDesc,
        ImageDescRef,
        BufferRegion,
        Bool,
        SizeTArray,
        StringArray,
        ErrorCode,
        ErrorCodeRet,
        Bitfield,
        DeviceType,
        PlatformInfo,
        DeviceInfo,
        DeviceFpConfig,
        DeviceMemCacheType,
        DeviceLocalMemType,
        DeviceExecCapabilities,
        CommandQueueProperties,
        DevicePartitionProperties,
        DeviceAffinityDomain,
        ContextProperties,
        ContextInfo,
        CommandQueueInfo,
        ChannelOrder,
        ChannelType,
        MemFlags,
        MemObjectType,
        MemInfo,
        MemMigrationFlags,
        ImageInfo,
        BufferCreateType,
        AddressingMode,
        FilterMode,
        SamplerInfo,
        MapFlags,
        ProgramInfo,
        ProgramBuildInfo,
        ProgramBinaryTyp,
        BuildStatus,
        KernelInfo,
        KernelArgInfo,
        KernelArgAddressQualifier,
        KernelArgAccessQualifier,
        KernelArgTypeQualifier,
        KernelWorkGroupInfo,
        EventInfo,
        CommandType,
        CommandExecutionStatus,
        ProfilingInfo,
        Mem,
        MemArray,
        PlatformId,
        PlatformIdArray,
        DeviceId,
        DeviceIdArray,
        CommandQueue,
        Context,
        Sampler,
        Program,
        ProgramArray,
        Kernel,
        KernelArray,
        Event,
        EventRef,
        EventArray,
        Binary,
        Binaries,
        CreateContextNotify,
        BuildProgramNotify,
        EnqueueNativeKernelUserFunc,
        SetEventCallbackCallback,
        MemObjectDestructorCallback
    }

    class CLImports {
        /* omitted for clarity, all these are private use only */
    }

    export class CL11 extends CLHost { }
    export class CL12 extends CL11 { }
    export class CLHost {
        constructor(version:number);
        version: number;
        libName: string;
        cl: {
            defs:CLDefinition;
        };
        types:Array<types>;
        getPlatforms():Array<CLPlatform>;
        imports:CLImports;
        static createV11():CL11;
        static createV12():CL12;
        static supportedVersions:{cl11:number; cl12:number};
    }

    export interface CLPlatform extends CLWrapper {
        name:string;
        vendor:string;
        clVersion:string;
        profile:string;
        extensions:Array<string>;

        getDevices(deviceType:string):Array<CLDevice>;
        allDevices():Array<CLDevice>;
        cpuDevices():Array<CLDevice>;
        gpuDevices():Array<CLDevice>;
        accelDevices():Array<CLDevice>;
    }

    export interface CLDevice extends CLWrapper {
        handle:Buffer;
        deviceType:number;
        platform:CLPlatform;
        vendorID:number;
        maxComputeUnits:number;
        maxWorkItemDimensions:number;
        maxWorkItemSizes:number;
        maxWorkgroupSize:number;
        maxClockFrequency:number;
        addressBits:number;
        maxMemAllocSize:number;
        imageSupport:boolean;
        maxReadImageArgs:number;
        maxWriteImageArgs:number;
        image2DMaxWidth:number;
        image2DMaxHeight:number;
        image3DMaxWidth:number;
        image3DMaxHeight:number;
        image3DMaxDepth:number;
        maxSamplers:number;
        maxParameterSize:number;
        memBaseAddrAlign:number;
        minDataTypeAlignSize:number;
        singleFpConfig:boolean;
        doubleFpConfig:boolean;
        globalMemCacheType:CLDefinition;
        globalMemCacheLineSize:number;
        globalMemCacheSize:number;
        globalMemSize:number;
        maxConstBufferSize:number;
        maxConstArgs:number;
        localMemType:number;
        localMemSize:number;
        errorCorrectionSupport:boolean;
        hostUnifiedMemory:boolean;
        profilingTimerResolution:number;
        littleEndian:boolean;
        available:boolean;
        compilerAvailable:boolean;

        deviceExecCapabilities:Array<CLDefinition>;
        commandQueueProperties:Array<CLDefinition>;
        name:string;
        vendor:string;
        driverVersion:number;
        profile:CLDefinition;
        clVersion:string;
        clCVersion:string;
        numVersion:number;
        extensions:Array<CLDefinition>;
    }

    class CLContext1 extends CLContext { }
    class CLContext2 extends CLContext { }
    export class CLContext extends CLWrapper {
        constructor(device:CLDevice);
        constructor(platform:CLPlatform, deviceType:string, properties:any);
        createProgram(source:string):CLProgram;
        numDevices:number;
        devices:Array<CLDevice>;
        getSupportedImageFormats(flags:Array<any>, type:string):Array<any>;
    }

    class CLBuffer1 extends CLBuffer { }
    class CLBuffer2 extends CLBuffer { }
    export class CLBuffer {
        constructor(context:CLContext, state:CLDefinition, bytes:number);
        static wrap(context:CLContext, hostPtr:number|string):CLBuffer;
        static wrapReadOnly(context:CLContext, hostPtr:number|string):CLBuffer;
        static wrapWriteOnly(context:CLContext, hostPtr:number|string):CLBuffer;
        offset:number;
        superBuffer:CLBuffer;
        createSubBuffer(flags:Array<CLDefinition>, origin:CLBuffer, size:number):CLBuffer; //not sure about the 'origin' arg...
    }

    class CLCommandQueue1 extends CLCommandQueue { }
    class CLCommandQueue2 extends CLCommandQueue { }
    export class CLCommandQueue extends CLWrapper {
        promise:Promise<void>;
        constructor(queue?:CLCommandQueue|CLContext, device?: CLDevice);
        context:CLContext;
        device:CLDevice;
        properties:any; //to-do
        isOutOfOrder:boolean;
        isProfilingEnabled():boolean;
        waitableVersion:any; //to-do
        notWaitableVersion:any; //to-do

        waitable(value?:boolean):CLCommandQueue;
        flush():void;
        enqueueWaitForEvents(events:Array<CLEvent>):void;
        enqueueTask(kernel:CLKernel, events:Array<CLEvent>):CLEvent|void;
        enqueueMarker():CLEvent;
        enqueueBarrier():void;
        enqueueNDRangeKernel(kernel:CLKernel, globalRange:void, localRange:void, offset:void, events?:Array<CLEvent>):CLEvent|void;
        enqueueReadBuffer(buffer:CLBuffer, offset:number, size:number, ptr?:number|string, events?:Array<CLEvent>):CLEvent|void;
        enqueueWriteBuffer(buffer:CLBuffer, offset:number, size:number, ptr?:number|string, events?:Array<CLEvent>):CLEvent|void;
        enqueueMapBuffer(buffer:CLBuffer, flags:Array<any>, offset:number, size:number, out:number|string, events:Array<CLEvent>):CLEvent|void;
        //to-do
        enqueueNDRangeKernel(kernel:CLKernel, globalSize:number, localSize:number):CLCommandQueue;
    }

    export class NDRange {
        constructor(xSize:number, ySize?:number, zSize?:number);
        dimensions:number;
        xSize:number;
        ySize:number;
        zSize:number;
        static nullRange():NDRange;
    }

    export class CLError {
        constructor(buildStatus:number, message:string);
        name:string;
        message:string;
        code:string;
    }

    export class CLEventProfilingInfo extends CLWrapper {
        constructor(cl:CL11|CL12, handle:Buffer);
        profilingCommandQueued:number;
        profilingCommandSubmit:number;
        profilingCommandStart:number;
        profilingCommandEnd:number;
    }

    export class CLEvent extends CLWrapper {
        constructor(cl:CL11|CL12, handle:Buffer);
        profilingInfo:CLEventProfilingInfo;
        commandQueue:CLCommandQueue;
        context:CLContext;
        commandType:CLDefinition;
        commandExecutionStatus:CLDefinition;
        promise:Promise<void>;
    }

    export class CLProgram1 extends CLProgram { }
    export class CLProgram2 extends CLProgram { }
    export class CLProgram extends CLWrapper {
        constructor();

        numDevices:number;
        devices:Array<CLDevice>;
        sourceCode:string;

        build(options:any, devices:CLDevice|Array<CLDevice>):Promise<void>;
        createKernel(name:string):CLKernel;
        createAllKernels():Array<CLKernel>;
        getBuildStatus(device:CLDevice):string;
        getBuildOptions(device:CLDevice):string;
        getBuildLog(device:CLDevice):string;
        getBuildLogs():string;
        getBinaries():void; //to-do
    }

    export class CLKernel1 extends CLKernel { }
    export class CLKernel2 extends CLKernel { }
    export class CLKernel extends CLWrapper {
        constructor(program:CLProgram, name:string);
        name:string;
        context:CLContext;
        numArgs:number;
        static getWorkgroupSize(device:CLDevice):void;
        getCompileWorkGroupSize(device:CLDevice):void;
        getLocalMemSize(device:CLDevice):void;
        getPreferredWorkGroupSizeMultiple(device:CLDevice):void;
        getPrivateMemSize(device:CLDevice):number;
        setArg(index:Number, buffer:CLBuffer, type?:string):void;
        setArgs(buffers:Array<CLBuffer>):void;
        bind(queue:CLCommandQueue, globalRange:number, localRange:number, offset:number):() => void;
    }

    export class CLMemory extends CLWrapper {
        constructor(context:CLContext, handle:Buffer);
        mapCount:number;
        hostPtr:string|number;
        size:number;
        memFlags:Array<any>;
        setDestructorCallback(fn:() => void):void;
        getGLObjectInfo():{glObjectType: string, glObjectName:string};
    }

    export class CLSampler extends CLWrapper {
        normalizedCoords:boolean;
        addressingMode:CLDefinition;
        filterMode:CLDefinition;
    }

    export class CLUserEvent extends CLEvent {
        constructor(context:CLContext);
        setStatus(status:string):void;
    }

    export interface clUtils {
        toPtr(ptr:Buffer|{buffer:Buffer}, name:string):Buffer;
        toHandle(obj:Buffer|{handle:Buffer}, name:string):Buffer;
        isHandle(obj:any):boolean;
        createDeviceArray(devices:Array<CLDevice>|CLDevice):Array<CLDevice>;
        asImageFormat(format:any):any;
        createPropArray(cl:CL11|CL12, properties:Array<any>, platform:CLPlatform):Array<any>;
        keepAlive(promise:Promise<void>):void;
    }

    export class CLWrapper /* extends fastcall.Disposable */ {
        version:number;
        release():void;
    }
}

export declare const nooocl:any;