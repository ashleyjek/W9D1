export default class GameView {


    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
    }


    start() {
        setInterval(function() {
            Game.moveObjects();
            Game.draw(ctx);
        }, 20);

    };
}