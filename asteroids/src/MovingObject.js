export default class MovingObject {
    constructor(object) {
        this.pos = object.pos;
        this.vel = object.vel;
        this.radius = object.radius;
        this.color = object.color;
    }
    
   draw(ctx) {
    const x = this.pos[0];
    const y = this.pos[1];
    arc(x, y, this.radius, 0, 2 * Math.PI)
    ctx.beginPath();
    ctx.fillStyle = `${this.color}`
    ctx.stroke();
   }
}

