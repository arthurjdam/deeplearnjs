// Definitions by: Arthur Dam <https://github.com/arthurjdam>

declare module 'nooocl' {
    enum CLDefinition {
        CL_SUCCESS,
        CL_DEVICE_NOT_FOUND,
        CL_DEVICE_NOT_AVAILABLE,
        CL_COMPILER_NOT_AVAILABLE,
        CL_MEM_OBJECT_ALLOCATION_FAILURE,
        CL_OUT_OF_RESOURCES,
        CL_OUT_OF_HOST_MEMORY,
        CL_PROFILING_INFO_NOT_AVAILABLE,
        CL_MEM_COPY_OVERLAP,
        CL_IMAGE_FORMAT_MISMATCH,
        CL_IMAGE_FORMAT_NOT_SUPPORTED,
        CL_BUILD_PROGRAM_FAILURE,
        CL_MAP_FAILURE,
        CL_MISALIGNED_SUB_BUFFER_OFFSET,
        CL_EXEC_STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST,
        CL_COMPILE_PROGRAM_FAILURE,
        CL_LINKER_NOT_AVAILABLE,
        CL_LINK_PROGRAM_FAILURE,
        CL_DEVICE_PARTITION_FAILED,
        CL_KERNEL_ARG_INFO_NOT_AVAILABLE,
        CL_INVALID_VALUE,
        CL_INVALID_DEVICE_TYPE,
        CL_INVALID_PLATFORM,
        CL_INVALID_DEVICE,
        CL_INVALID_CONTEXT,
        CL_INVALID_QUEUE_PROPERTIES,
        CL_INVALID_COMMAND_QUEUE,
        CL_INVALID_HOST_PTR,
        CL_INVALID_MEM_OBJECT,
        CL_INVALID_IMAGE_FORMAT_DESCRIPTOR,
        CL_INVALID_IMAGE_SIZE,
        CL_INVALID_SAMPLER,
        CL_INVALID_BINARY,
        CL_INVALID_BUILD_OPTIONS,
        CL_INVALID_PROGRAM,
        CL_INVALID_PROGRAM_EXECUTABLE,
        CL_INVALID_KERNEL_NAME,
        CL_INVALID_KERNEL_DEFINITION,
        CL_INVALID_KERNEL,
        CL_INVALID_ARG_INDEX,
        CL_INVALID_ARG_VALUE,
        CL_INVALID_ARG_SIZE,
        CL_INVALID_KERNEL_ARGS,
        CL_INVALID_WORK_DIMENSION,
        CL_INVALID_WORK_GROUP_SIZE,
        CL_INVALID_WORK_ITEM_SIZE,
        CL_INVALID_GLOBAL_OFFSET,
        CL_INVALID_EVENT_WAIT_LIST,
        CL_INVALID_EVENT,
        CL_INVALID_OPERATION,
        CL_INVALID_GL_OBJECT,
        CL_INVALID_BUFFER_SIZE,
        CL_INVALID_MIP_LEVEL,
        CL_INVALID_GLOBAL_WORK_SIZE,
        CL_INVALID_PROPERTY,
        CL_INVALID_IMAGE_DESCRIPTOR,
        CL_INVALID_COMPILER_OPTIONS,
        CL_INVALID_LINKER_OPTIONS,
        CL_INVALID_DEVICE_PARTITION_COUNT,
        CL_VERSION_1_0,
        CL_VERSION_1_1,
        CL_VERSION_1_2,
        CL_FALSE,
        CL_TRUE,
        CL_BLOCKING,
        CL_NON_BLOCKING,
        CL_PLATFORM_PROFILE,
        CL_PLATFORM_VERSION,
        CL_PLATFORM_NAME,
        CL_PLATFORM_VENDOR,
        CL_PLATFORM_EXTENSIONS,
        CL_DEVICE_TYPE_DEFAULT,
        CL_DEVICE_TYPE_CPU,
        CL_DEVICE_TYPE_GPU,
        CL_DEVICE_TYPE_ACCELERATOR,
        CL_DEVICE_TYPE_CUSTOM,
        CL_DEVICE_TYPE_ALL,
        CL_DEVICE_TYPE,
        CL_DEVICE_VENDOR_ID,
        CL_DEVICE_MAX_COMPUTE_UNITS,
        CL_DEVICE_MAX_WORK_ITEM_DIMENSIONS,
        CL_DEVICE_MAX_WORK_GROUP_SIZE,
        CL_DEVICE_MAX_WORK_ITEM_SIZES,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_CHAR,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_SHORT,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_INT,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_LONG,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_DOUBLE,
        CL_DEVICE_MAX_CLOCK_FREQUENCY,
        CL_DEVICE_ADDRESS_BITS,
        CL_DEVICE_MAX_READ_IMAGE_ARGS,
        CL_DEVICE_MAX_WRITE_IMAGE_ARGS,
        CL_DEVICE_MAX_MEM_ALLOC_SIZE,
        CL_DEVICE_IMAGE2D_MAX_WIDTH,
        CL_DEVICE_IMAGE2D_MAX_HEIGHT,
        CL_DEVICE_IMAGE3D_MAX_WIDTH,
        CL_DEVICE_IMAGE3D_MAX_HEIGHT,
        CL_DEVICE_IMAGE3D_MAX_DEPTH,
        CL_DEVICE_IMAGE_SUPPORT,
        CL_DEVICE_MAX_PARAMETER_SIZE,
        CL_DEVICE_MAX_SAMPLERS,
        CL_DEVICE_MEM_BASE_ADDR_ALIGN,
        CL_DEVICE_MIN_DATA_TYPE_ALIGN_SIZE,
        CL_DEVICE_SINGLE_FP_CONFIG,
        CL_DEVICE_GLOBAL_MEM_CACHE_TYPE,
        CL_DEVICE_GLOBAL_MEM_CACHELINE_SIZE,
        CL_DEVICE_GLOBAL_MEM_CACHE_SIZE,
        CL_DEVICE_GLOBAL_MEM_SIZE,
        CL_DEVICE_MAX_CONSTANT_BUFFER_SIZE,
        CL_DEVICE_MAX_CONSTANT_ARGS,
        CL_DEVICE_LOCAL_MEM_TYPE,
        CL_DEVICE_LOCAL_MEM_SIZE,
        CL_DEVICE_ERROR_CORRECTION_SUPPORT,
        CL_DEVICE_PROFILING_TIMER_RESOLUTION,
        CL_DEVICE_ENDIAN_LITTLE,
        CL_DEVICE_AVAILABLE,
        CL_DEVICE_COMPILER_AVAILABLE,
        CL_DEVICE_EXECUTION_CAPABILITIES,
        CL_DEVICE_QUEUE_PROPERTIES,
        CL_DEVICE_NAME,
        CL_DEVICE_VENDOR,
        CL_DRIVER_VERSION,
        CL_DEVICE_PROFILE,
        CL_DEVICE_VERSION,
        CL_DEVICE_EXTENSIONS,
        CL_DEVICE_PLATFORM,
        CL_DEVICE_DOUBLE_FP_CONFIG,
        CL_DEVICE_PREFERRED_VECTOR_WIDTH_HALF,
        CL_DEVICE_HOST_UNIFIED_MEMORY,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_CHAR,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_SHORT,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_INT,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_LONG,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_FLOAT,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_DOUBLE,
        CL_DEVICE_NATIVE_VECTOR_WIDTH_HALF,
        CL_DEVICE_OPENCL_C_VERSION,
        CL_DEVICE_LINKER_AVAILABLE,
        CL_DEVICE_BUILT_IN_KERNELS,
        CL_DEVICE_IMAGE_MAX_BUFFER_SIZE,
        CL_DEVICE_IMAGE_MAX_ARRAY_SIZE,
        CL_DEVICE_PARENT_DEVICE,
        CL_DEVICE_PARTITION_MAX_SUB_DEVICES,
        CL_DEVICE_PARTITION_PROPERTIES,
        CL_DEVICE_PARTITION_AFFINITY_DOMAIN,
        CL_DEVICE_PARTITION_TYPE,
        CL_DEVICE_REFERENCE_COUNT,
        CL_DEVICE_PREFERRED_INTEROP_USER_SYNC,
        CL_DEVICE_PRINTF_BUFFER_SIZE,
        CL_DEVICE_IMAGE_PITCH_ALIGNMENT,
        CL_DEVICE_IMAGE_BASE_ADDRESS_ALIGNMENT,
        CL_FP_DENORM,
        CL_FP_INF_NAN,
        CL_FP_ROUND_TO_NEAREST,
        CL_FP_ROUND_TO_ZERO,
        CL_FP_ROUND_TO_INF,
        CL_FP_FMA,
        CL_FP_SOFT_FLOAT,
        CL_FP_CORRECTLY_ROUNDED_DIVIDE_SQRT,
        CL_NONE,
        CL_READ_ONLY_CACHE,
        CL_READ_WRITE_CACHE,
        CL_LOCAL,
        CL_GLOBAL,
        CL_EXEC_KERNEL,
        CL_EXEC_NATIVE_KERNEL,
        CL_QUEUE_OUT_OF_ORDER_EXEC_MODE_ENABLE,
        CL_QUEUE_PROFILING_ENABLE,
        CL_CONTEXT_REFERENCE_COUNT,
        CL_CONTEXT_DEVICES,
        CL_CONTEXT_PROPERTIES,
        CL_CONTEXT_NUM_DEVICES,
        CL_CONTEXT_PLATFORM,
        CL_CONTEXT_INTEROP_USER_SYNC,
        CL_DEVICE_PARTITION_EQUALLY,
        CL_DEVICE_PARTITION_BY_COUNTS,
        CL_DEVICE_PARTITION_BY_COUNTS_LIST_END,
        CL_DEVICE_PARTITION_BY_AFFINITY_DOMAIN,
        CL_DEVICE_AFFINITY_DOMAIN_NUMA,
        CL_DEVICE_AFFINITY_DOMAIN_L4_CACHE,
        CL_DEVICE_AFFINITY_DOMAIN_L3_CACHE,
        CL_DEVICE_AFFINITY_DOMAIN_L2_CACHE,
        CL_DEVICE_AFFINITY_DOMAIN_L1_CACHE,
        CL_DEVICE_AFFINITY_DOMAIN_NEXT_PARTITIONABLE,
        CL_QUEUE_CONTEXT,
        CL_QUEUE_DEVICE,
        CL_QUEUE_REFERENCE_COUNT,
        CL_QUEUE_PROPERTIES,
        CL_MEM_READ_WRITE,
        CL_MEM_WRITE_ONLY,
        CL_MEM_READ_ONLY,
        CL_MEM_USE_HOST_PTR,
        CL_MEM_ALLOC_HOST_PTR,
        CL_MEM_COPY_HOST_PTR,
        CL_MEM_HOST_WRITE_ONLY,
        CL_MEM_HOST_READ_ONLY,
        CL_MEM_HOST_NO_ACCESS,
        CL_MIGRATE_MEM_OBJECT_HOST,
        CL_MIGRATE_MEM_OBJECT_CONTENT_UNDEFINED,
        CL_R,
        CL_A,
        CL_RG,
        CL_RA,
        CL_RGB,
        CL_RGBA,
        CL_BGRA,
        CL_ARGB,
        CL_INTENSITY,
        CL_LUMINANCE,
        CL_Rx,
        CL_RGx,
        CL_RGBx,
        CL_DEPTH,
        CL_DEPTH_STENCIL,
        CL_SNORM_INT8,
        CL_SNORM_INT16,
        CL_UNORM_INT8,
        CL_UNORM_INT16,
        CL_UNORM_SHORT_565,
        CL_UNORM_SHORT_555,
        CL_UNORM_INT_101010,
        CL_SIGNED_INT8,
        CL_SIGNED_INT16,
        CL_SIGNED_INT32,
        CL_UNSIGNED_INT8,
        CL_UNSIGNED_INT16,
        CL_UNSIGNED_INT32,
        CL_HALF_FLOAT,
        CL_FLOAT,
        CL_UNORM_INT24,
        CL_MEM_OBJECT_BUFFER,
        CL_MEM_OBJECT_IMAGE2D,
        CL_MEM_OBJECT_IMAGE3D,
        CL_MEM_OBJECT_IMAGE2D_ARRAY,
        CL_MEM_OBJECT_IMAGE1D,
        CL_MEM_OBJECT_IMAGE1D_ARRAY,
        CL_MEM_OBJECT_IMAGE1D_BUFFER,
        CL_MEM_TYPE,
        CL_MEM_FLAGS,
        CL_MEM_SIZE,
        CL_MEM_HOST_PTR,
        CL_MEM_MAP_COUNT,
        CL_MEM_REFERENCE_COUNT,
        CL_MEM_CONTEXT,
        CL_MEM_ASSOCIATED_MEMOBJECT,
        CL_MEM_OFFSET,
        CL_IMAGE_FORMAT,
        CL_IMAGE_ELEMENT_SIZE,
        CL_IMAGE_ROW_PITCH,
        CL_IMAGE_SLICE_PITCH,
        CL_IMAGE_WIDTH,
        CL_IMAGE_HEIGHT,
        CL_IMAGE_DEPTH,
        CL_IMAGE_ARRAY_SIZE,
        CL_IMAGE_BUFFER,
        CL_IMAGE_NUM_MIP_LEVELS,
        CL_IMAGE_NUM_SAMPLES,
        CL_ADDRESS_NONE,
        CL_ADDRESS_CLAMP_TO_EDGE,
        CL_ADDRESS_CLAMP,
        CL_ADDRESS_REPEAT,
        CL_ADDRESS_MIRRORED_REPEAT,
        CL_FILTER_NEAREST,
        CL_FILTER_LINEAR,
        CL_SAMPLER_REFERENCE_COUNT,
        CL_SAMPLER_CONTEXT,
        CL_SAMPLER_NORMALIZED_COORDS,
        CL_SAMPLER_ADDRESSING_MODE,
        CL_SAMPLER_FILTER_MODE,
        CL_MAP_READ,
        CL_MAP_WRITE,
        CL_MAP_WRITE_INVALIDATE_REGION,
        CL_PROGRAM_REFERENCE_COUNT,
        CL_PROGRAM_CONTEXT,
        CL_PROGRAM_NUM_DEVICES,
        CL_PROGRAM_DEVICES,
        CL_PROGRAM_SOURCE,
        CL_PROGRAM_BINARY_SIZES,
        CL_PROGRAM_BINARIES,
        CL_PROGRAM_NUM_KERNELS,
        CL_PROGRAM_KERNEL_NAMES,
        CL_PROGRAM_BUILD_STATUS,
        CL_PROGRAM_BUILD_OPTIONS,
        CL_PROGRAM_BUILD_LOG,
        CL_PROGRAM_BINARY_TYPE,
        CL_PROGRAM_BINARY_TYPE_NONE,
        CL_PROGRAM_BINARY_TYPE_COMPILED_OBJECT,
        CL_PROGRAM_BINARY_TYPE_LIBRARY,
        CL_PROGRAM_BINARY_TYPE_EXECUTABLE,
        CL_BUILD_SUCCESS,
        CL_BUILD_NONE,
        CL_BUILD_ERROR,
        CL_BUILD_IN_PROGRESS,
        CL_KERNEL_FUNCTION_NAME,
        CL_KERNEL_NUM_ARGS,
        CL_KERNEL_REFERENCE_COUNT,
        CL_KERNEL_CONTEXT,
        CL_KERNEL_PROGRAM,
        CL_KERNEL_ATTRIBUTES,
        CL_KERNEL_ARG_ADDRESS_QUALIFIER,
        CL_KERNEL_ARG_ACCESS_QUALIFIER,
        CL_KERNEL_ARG_TYPE_NAME,
        CL_KERNEL_ARG_TYPE_QUALIFIER,
        CL_KERNEL_ARG_NAME,
        CL_KERNEL_ARG_ADDRESS_GLOBAL,
        CL_KERNEL_ARG_ADDRESS_LOCAL,
        CL_KERNEL_ARG_ADDRESS_CONSTANT,
        CL_KERNEL_ARG_ADDRESS_PRIVATE,
        CL_KERNEL_ARG_ACCESS_READ_ONLY,
        CL_KERNEL_ARG_ACCESS_WRITE_ONLY,
        CL_KERNEL_ARG_ACCESS_READ_WRITE,
        CL_KERNEL_ARG_ACCESS_NONE,
        CL_KERNEL_ARG_TYPE_NONE,
        CL_KERNEL_ARG_TYPE_CONST,
        CL_KERNEL_ARG_TYPE_RESTRICT,
        CL_KERNEL_ARG_TYPE_VOLATILE,
        CL_KERNEL_WORK_GROUP_SIZE,
        CL_KERNEL_COMPILE_WORK_GROUP_SIZE,
        CL_KERNEL_LOCAL_MEM_SIZE,
        CL_KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE,
        CL_KERNEL_PRIVATE_MEM_SIZE,
        CL_KERNEL_GLOBAL_WORK_SIZE,
        CL_EVENT_COMMAND_QUEUE,
        CL_EVENT_COMMAND_TYPE,
        CL_EVENT_REFERENCE_COUNT,
        CL_EVENT_COMMAND_EXECUTION_STATUS,
        CL_EVENT_CONTEXT,
        CL_COMMAND_NDRANGE_KERNEL,
        CL_COMMAND_TASK,
        CL_COMMAND_NATIVE_KERNEL,
        CL_COMMAND_READ_BUFFER,
        CL_COMMAND_WRITE_BUFFER,
        CL_COMMAND_COPY_BUFFER,
        CL_COMMAND_READ_IMAGE,
        CL_COMMAND_WRITE_IMAGE,
        CL_COMMAND_COPY_IMAGE,
        CL_COMMAND_COPY_IMAGE_TO_BUFFER,
        CL_COMMAND_COPY_BUFFER_TO_IMAGE,
        CL_COMMAND_MAP_BUFFER,
        CL_COMMAND_MAP_IMAGE,
        CL_COMMAND_UNMAP_MEM_OBJECT,
        CL_COMMAND_MARKER,
        CL_COMMAND_ACQUIRE_GL_OBJECTS,
        CL_COMMAND_RELEASE_GL_OBJECTS,
        CL_COMMAND_READ_BUFFER_RECT,
        CL_COMMAND_WRITE_BUFFER_RECT,
        CL_COMMAND_COPY_BUFFER_RECT,
        CL_COMMAND_USER,
        CL_COMMAND_BARRIER,
        CL_COMMAND_MIGRATE_MEM_OBJECTS,
        CL_COMMAND_FILL_BUFFER,
        CL_COMMAND_FILL_IMAGE,
        CL_COMPLETE,
        CL_RUNNING,
        CL_SUBMITTED,
        CL_QUEUED,
        CL_BUFFER_CREATE_TYPE_REGION,
        CL_PROFILING_COMMAND_QUEUED,
        CL_PROFILING_COMMAND_SUBMIT,
        CL_PROFILING_COMMAND_START,
        CL_PROFILING_COMMAND_END,
        CL_DEVICE_COMPUTE_CAPABILITY_MAJOR_NV,
        CL_DEVICE_COMPUTE_CAPABILITY_MINOR_NV,
        CL_DEVICE_REGISTERS_PER_BLOCK_NV,
        CL_DEVICE_WARP_SIZE_NV,
        CL_DEVICE_GPU_OVERLAP_NV,
        CL_DEVICE_KERNEL_EXEC_TIMEOUT_NV,
        CL_DEVICE_INTEGRATED_MEMORY_NV,
        CL_DEVICE_GLOBAL_FREE_MEMORY_AMD,
        CL_DEVICE_SIMD_PER_COMPUTE_UNIT_AMD,
        CL_DEVICE_SIMD_WIDTH_AMD,
        CL_DEVICE_SIMD_INSTRUCTION_WIDTH_AMD,
        CL_DEVICE_WAVEFRONT_WIDTH_AMD,
        CL_DEVICE_GLOBAL_MEM_CHANNELS_AMD,
        CL_DEVICE_GLOBAL_MEM_CHANNEL_BANKS_AMD,
        CL_DEVICE_GLOBAL_MEM_CHANNEL_BANK_WIDTH_AMD,
        CL_DEVICE_LOCAL_MEM_SIZE_PER_COMPUTE_UNIT_AMD,
        CL_DEVICE_LOCAL_MEM_BANKS_AMD
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

    }

    export class CL11 extends CLHost { }
    export class CL12 extends CL11 { }
    export class CLHost {
        constructor(version:number);
        version: number;
        libName: string;
        cl: {
            defs:Array<CLDefinition>;
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
        constructor(queue?:CLCommandQueue, device?: CLDevice);
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

    export interface CLError {
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