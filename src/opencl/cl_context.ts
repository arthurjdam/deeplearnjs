import CL_Platform, {types} from './cl_platform';
import {ref} from 'fastcall';
import CL_Device from './cl_device';
import { cl_errors } from './definitions';

export default class CL_Context {
    private _devices;
    private _handle:Buffer;

    constructor(devices: Array<CL_Device>) {
        this._devices = new (types.DeviceIdArray)(devices.length);
        for (let i = 0; i < devices.length; ++i) {
            this._devices.set(i, CL_Context.toHandle(devices[i].id));
        }

        let err = ref.alloc(types.ErrorCode);

        this._handle = CL_Platform.instance().library.clCreateContext(null, devices.length, this._devices, null, null, err);
    }

    static toHandle(obj:any|Buffer, name?:string) {
        if (obj instanceof Buffer) {
            return obj;
        }
        if (obj && obj.handle instanceof Buffer) {
            return obj.handle;
        }

        throw new TypeError(`Object ${(name || 'obj')} is not an OpenCL object.`);
    }
}
