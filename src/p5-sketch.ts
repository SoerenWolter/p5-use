import p5 = require('p5');

export class P5Sketch {

    // Location
    private angle: number = 0;
    // Velocity
    private aVelocity: number = 0;
    // Acceleration
    private aAcceleration: number = 0.001;

    constructor(private p: p5) {
        console.log("start");
    }

    public preload(): void {

    }

    public setup(): void {
        this.p.createCanvas(640, 360);
        this.p.mousePressed = (event) => this.mousePressed(event);
    }

    public draw(): void {
        this.p.background(255);
        this.p.fill(175);
        this.p.stroke(0);
        this.p.rectMode(this.p.CENTER);
        this.p.translate(this.p.width/2,this.p.height/2);
        this.p.rotate(this.angle);
        this.p.line(-100,0,100,0);
        this.p.ellipse(100,0,8,8);
        this.p.ellipse(-100,0,8,8);

        this.aVelocity += this.aAcceleration;
        this.angle += this.aVelocity;
    }

    public remove(): void {

    }

    private mousePressed(event){
        this.aVelocity = 0;
    }
}