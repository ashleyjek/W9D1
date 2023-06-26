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
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = `${this.color}`
    ctx.stroke();
   }

   move() {
    const [x, y] = this.pos
    const [i, j] = this.vel
    this.pos = [x + i, y +j];
   }
}

