import { Env } from './env';
import { Cartpole } from "./cartpole";

export const envs = [
    'Cartpole-v0'
];

export class Gym {
    static make(env:string):typeof Env {
        if(env === envs[0]) return new Cartpole();
        return null;
    }
}