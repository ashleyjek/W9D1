import Asteroid from "./Asteroid";

export default class Game {
    static DIM_X = 1000;
    static DIM_Y = 1000;
    static NUM_ASTEROIDS = 10;

    constructor() {
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            const pos = Game.randomPosition;
            this.asteroids.push(new Asteroid(pos));
        }
    }

    randomPosition() {
        const x = Math.floor(Math.random() * Game.DIM_X);
        const y = Math.floor(Math.random() * Game.DIM_Y);
        return [x, y];
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach((asteroid) => {
            asteroid.draw(ctx);
        })
    }

    moveObjects() {
        this.asteroids.forEach((asteroid) => {
            asteroid.move();
        })
    }
    
}