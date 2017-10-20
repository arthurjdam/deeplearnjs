import * as fastcall from 'fastcall';
import { ref } from 'fastcall';
import * as def from './definitions';
import CL_Platform from './cl_platform';
import { Method } from './cl_platform';

export default class CL_Device {
    private name:string;
    private vendor:string;
    private driver_version:string;
    private device_extensions:ReadonlyArray<string>;

    constructor(private id:Buffer) {
        this.name = this.getDeviceInfo(def.cl_device_info.CL_DEVICE_NAME);
        this.vendor = this.getDeviceInfo(def.cl_device_info.CL_DEVICE_VENDOR);
        this.driver_version = this.getDeviceInfo(def.cl_device_info.CL_DRIVER_VERSION);
        this.device_extensions = this.getDeviceInfo(def.cl_device_info.CL_DEVICE_EXTENSIONS).split(' ');
    }

    getDeviceInfo(flag:def.cl_device_info = def.cl_device_info.CL_DEVICE_NAME, method:Method = Method.clGetDeviceInfo):string {
        let err;
        let type = ref.coerceType('char');
        let count = ref.alloc('size_t');

        err = CL_Platform.instance().library[method](this.id, flag, 0, null, count);

        const nCount = count.deref();
        const size = nCount / (type.size || ref.sizeof.pointer);
        let buffer = new (new (fastcall.ArrayType)(type))(size);

        err = CL_Platform.instance().library[method](this.id, flag, nCount, buffer.buffer, null);

        let result = [];
        for (let i = 0; i < size; i++) {
            result.push(buffer.get(i));
        }
        return result.filter((code: any) => code > 0).map((code: any) => String.fromCharCode(code)).join('').trim();
    }
}