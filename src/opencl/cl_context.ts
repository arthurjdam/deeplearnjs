import CL_Platform, {types} from './cl_platform';
import { ref } from 'fastcall';
import CL_Device from './cl_device';
// import { cl_errors } from './definitions';
import CL_Util from './cl_util';
import { Method } from './cl_platform';

export default class CL_Context {
    private _devices;
    private _handle:Buffer;

    constructor(devices: Array<CL_Device>) {
        this._devices = new (types.DeviceIdArray)(devices.length);
        for (let i = 0; i < devices.length; ++i) {
            this._devices.set(i, CL_Util.toHandle(devices[i].id));
        }

        let err = ref.alloc(types.ErrorCode);

        this._handle = CL_Platform.instance().library[Method.clCreateContext](null, devices.length, this._devices, null, null, err);
    }
}
