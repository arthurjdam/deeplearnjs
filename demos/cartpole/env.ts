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

export abstract class Env {
    public readonly id: string;
    public readonly maxExpisodeSteps: number;
    public readonly rewardThreshold: number;

    protected canvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    protected static rewardRange = [-Infinity, Infinity];

    constructor(canvas?: HTMLCanvasElement) {
        if (canvas) {
            this.canvas = canvas;
        } else {
            this.canvas = document.createElement('canvas');
            document.body.appendChild(this.canvas);
        }
        this.ctx = this.canvas.getContext('2d');
    }

    protected abstract _step(action: number): void;

    protected abstract _reset(): void;

    protected abstract _render(): void;

    protected abstract _seed(): void;

    step(action: number) {
        this._step(action);
    }

    reset() {
        this._reset();
    }

    render() {
        this._render();
    }

    seed() {
        this._seed();
    }
}