declare const Promise:any;

import CL_Platform from './cl_platform';
import CL_Device from './cl_device';

export default class CL_Program {
    constructor() {

    }

    build(opts:any, devices?:ReadonlyArray<CL_Device>):Promise<void> {
        return new Promise((res, rej) => {

        });
    }

    // TODO: return CLKernel
    createKernel(name:string):void {

    }
}