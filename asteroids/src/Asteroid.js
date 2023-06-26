import * as Util from "./Util.js";
import MovingObject from "./MovingObject";

export default class Asteroid extends MovingObject {
    static RADIUS = 25;
    static COLOR = "pink";

    constructor(object){
        super(object);
        this.pos = object.pos;
        this.vel = Util.randomVec();
        this.radius = Asteroid.RADIUS;
        this.color = Asteroid.COLOR;
    }
}