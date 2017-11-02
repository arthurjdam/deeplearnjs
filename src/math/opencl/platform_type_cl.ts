export enum PlatformType {
    win32 = 'win32',
    darwin = 'darwin',
    linux = 'linux'
};

export const PlatformFramework = {
    [PlatformType.win32]: 'OpenCL',
    [PlatformType.darwin]: '/System/Library/Frameworks/OpenCL.framework/OpenCL',
    [PlatformType.linux]: 'libOpenCL.so'
}