import { CLHost, CLDevice } from 'nooocl';

export enum DeviceType {
    'gpu',
    'cpu',
    'all'
}

export function getDevices(host:CLHost, type:DeviceType = DeviceType.all):Array<CLDevice> {
    const platforms = host.getPlatforms();
    let devices:Array<CLDevice> = [];
    for(let i = 0; i < platforms.length; ++i)
    {
        switch (type)
        {
            case DeviceType.cpu:
                devices = devices.concat(platforms[i].cpuDevices());
                break;
            case DeviceType.gpu:
                devices = devices.concat(platforms[i].gpuDevices());
                break;
            case DeviceType.all:
            default:
                devices = devices.concat(platforms[i].allDevices());
        }
    }

    return devices;

}