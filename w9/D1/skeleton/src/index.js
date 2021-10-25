const Game = require('./game.js')

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js')
window.MovingObject = MovingObject;


document.addEventListener('DOMContentLoaded', () => {
    const canvasElement = document.getElementById('game-canvas');
    canvasElement.width = 1000;
    canvasElement.height = 600;
    const ctx = canvasElement.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1000, 600);
    
    let dummy = new Game();
    dummy.draw(ctx);
} )

