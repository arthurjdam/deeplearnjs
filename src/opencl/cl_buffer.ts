import CL_Platform from './cl_platform';
import CL_Util from './cl_util';
import * as def from './definitions';
import { Method } from './cl_platform';

export default class CL_Buffer {
    private _handle;

    constructor(flags:def.cl_mem_flags, dataSize:number, hostPtr = null) {
        let err;

        this._handle = CL_Platform.instance().library[Method.clCreateBuffer](CL_Util.toHandle(CL_Platform.instance().library), flags, dataSize, CL_Util.toPtr(hostPtr, "hostPtr"), err);
    }
}