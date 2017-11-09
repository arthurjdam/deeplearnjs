/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import { Env } from './env';

// tslint:disable-next-line:max-line-length
// adapted from: https://github.com/openai/gym/blob/master/gym/envs/classic_control/cartpole.py

export interface GameStep {
    state: number[];
    reward: number;
    done: boolean;
}

export class Cartpole extends Env {
    public readonly id = 'Cartpole-v0';
    public readonly maxExpisodeSteps = 200;
    public readonly rewardThreshold = 195.0;

    private static GRAVITY = 9.8;
    private static MASSCART = 1.0;
    private static MASSPOLE = 0.1;
    private static TOTALMASS = Cartpole.MASSPOLE + Cartpole.MASSCART;
    private static LENGTH = 0.5; //actually half the pole's length
    private static POLEMASSLENGTH = Cartpole.MASSPOLE * Cartpole.LENGTH;
    private static FORCEMAG = 10.0;
    private static TAU = 0.02; //time (in seconds) between updates;

    // max angle before a game is considered "game over"
    private static THETATHRESHOLDRADIANS = 12.0 * 2.0 * Math.PI / 360;

    // max offset from the start position before a game is considered
    // "game over"
    private static XTHRESHOLD = 2.4;

    // the state is represented with shape [4,], and contains:
    // x, x-dot, theta, theta-dot
    private state: number[] = null;
    private stepsBeyondDone: number = null;

    private static ACTIONSPACE = [0, 1];

    // dimensions of the canvas (if rendering is used)
    width = 600;
    height = 400;

    constructor() {
        super();

        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    /**
     * Update game logic (i.e. a "frame" of game-time)
     * @param {number} action
     * @returns {GameStep}
     * @private
     */
    protected _step(action: number): GameStep {
        if (Cartpole.ACTIONSPACE.indexOf(action) < 0) {
            console.error(`Invalid action: ${action}`);
        }

        const state = this.state;
        let x = state[0];
        let xDot = state[1];
        let theta = state[2];
        let thetaDot = state[3];

        const force = (action === 1) ? Cartpole.FORCEMAG : -Cartpole.FORCEMAG;
        const costheta = Math.cos(theta);
        const sintheta = Math.sin(theta);
        const temp = (
            force +
            Cartpole.POLEMASSLENGTH *
            thetaDot *
            thetaDot *
            sintheta) / Cartpole.TOTALMASS;
        const thetaacc = (
            Cartpole.GRAVITY *
            sintheta -
            costheta *
            temp) / (Cartpole.LENGTH *
            (4.0 / 3.0 - Cartpole.MASSPOLE *
                costheta *
                costheta /
                Cartpole.TOTALMASS));
        const xacc = temp -
            Cartpole.POLEMASSLENGTH *
            thetaacc *
            costheta /
            Cartpole.TOTALMASS;
        x += Cartpole.TAU * xDot;
        xDot += Cartpole.TAU * xacc;
        theta += Cartpole.TAU * thetaDot;
        thetaDot += Cartpole.TAU * thetaacc;
        this.state = [x, xDot, theta, thetaDot];

        const done = (
            x < -Cartpole.XTHRESHOLD ||
            x > Cartpole.XTHRESHOLD ||
            theta < -Cartpole.THETATHRESHOLDRADIANS ||
            theta > Cartpole.THETATHRESHOLDRADIANS
        );

        let reward = 0;
        if (done === false) {
            reward = 1;
        } else if (this.stepsBeyondDone === null) {
            this.stepsBeyondDone = 0;
            reward = 1;
            alert('done');
        } else {
            if (this.stepsBeyondDone === 0) {
                console.warn('You are calling step() even though' +
                    'this environment is already done! You should always' +
                    'reset() when receiving done = true');
            }
            this.stepsBeyondDone += 1;
            reward = 0;
        }

        return {state, reward, done} as GameStep;
    }

    protected _seed() {

    }

    /**
     * Reset the game to a start position
     * @returns {number[]}
     * @private
     */
    protected _reset() {
        const rand = (high: number, low: number) => {
            return low + Math.random() * high * 2.0;
        };
        this.state = [
            rand(0.05, -0.05),
            rand(0.05, -0.05),
            rand(0.05, -0.05),
            rand(0.05, -0.05)
        ];
        this.stepsBeyondDone = null;
        return this.state;
    }

    private static WORLDWIDTH = Cartpole.XTHRESHOLD * 2.0;
    private static CART_COLOR = '#00';
    private static TRACK_COLOR = '#000';
    private static POLE_COLOR = `rgb(
    ${Math.round(0.8 * 255)}, 
    ${Math.round(0.6 * 255)}, 
    ${Math.round(0.4 * 255)})`;
    private static AXLE_COLOR = `rgb(
    ${Math.round(0.5 * 255)}, 
    ${Math.round(0.5 * 255)}, 
    ${Math.round(0.8 * 255)})`;

    private static CARTWIDTH = 50.0;
    private static CARTHEIGHT = 30.0;
    private static CARTY = 100.0;

    private static POLEWIDTH = 10.0;

    /**
     * Visually the frame to a canvas object
     * @private
     */
    protected _render() {
        const scale = this.width / Cartpole.WORLDWIDTH;
        const cartx = this.state[0] * scale + this.width / 2.0;

        if (true) {
            this.ctx.clearRect(0, 0, this.width, this.height);

            this.ctx.save();

            //cart
            this.ctx.translate(cartx, Cartpole.CARTY);
            this.ctx.beginPath();
            this.ctx.fillStyle = Cartpole.CART_COLOR;
            this.ctx.fillRect(
                -Cartpole.CARTWIDTH / 2,
                -Cartpole.CARTHEIGHT / 2,
                Cartpole.CARTWIDTH,
                Cartpole.CARTHEIGHT
            );

            // track
            this.ctx.beginPath();
            this.ctx.strokeStyle = Cartpole.TRACK_COLOR;
            this.ctx.lineWidth = 1;
            this.ctx.moveTo(-cartx, 0);
            this.ctx.lineTo(-cartx + this.width, 0);
            this.ctx.stroke();

            //pole
            this.ctx.beginPath();
            this.ctx.strokeStyle = Cartpole.POLE_COLOR;
            this.ctx.lineWidth = Cartpole.POLEWIDTH;
            this.ctx.rotate(-this.state[2]);
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(0, -scale);
            this.ctx.stroke();

            //axle
            this.ctx.beginPath();
            this.ctx.fillStyle = Cartpole.AXLE_COLOR;
            this.ctx.arc(
                0,
                0,
                Cartpole.POLEWIDTH / 2,
                0,
                2.0 * Math.PI
            );
            this.ctx.fill();

            //done
            this.ctx.restore();
        }
    }
}

const a = new Cartpole();
a.reset();

let action = 0;
document.addEventListener('keydown', e => {
    if (e.keyCode === 39) {
        action = 1;
    }
});
document.addEventListener('keyup', e => {
    if (e.keyCode === 39) {
        action = 0;
    }
});

const loop = () => {
    console.log(action);
    a.step(action);
    a.render();

    requestAnimationFrame(loop);

};
// a.step(1);
// a.render();

loop();