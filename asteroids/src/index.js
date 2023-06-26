import MovingObject from "./MovingObject";
window.MovingObject = MovingObject;

import Asteroid from "./Asteroid";
window.Asteroid = Asteroid;

import Game from "./game";
window.Game = Game;

import GameView from "./gameView";
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = Game.DIM_X;
    canvas.width = Game.DIM_Y;
    const hello = new GameView(ctx);
    hello.start();
});