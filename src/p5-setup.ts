import p5 = require('p5');
import { P5Sketch } from "./p5-sketch";

export class P5Setup {
    private p5: p5;
    private sketchExecute: P5Sketch;
    constructor() {
        this.init();
    }

    private init() {
        this.p5 = new p5(this.sketch);
    }

    private sketch = (p: any) => {
        this.sketchExecute = new P5Sketch(p);
        p.setup = () => this.sketchExecute.setup();
        p.draw = () => this.sketchExecute.draw();
        p.preload = () => this.sketchExecute.preload();
        p.remove = () => this.sketchExecute.remove();
    }
}