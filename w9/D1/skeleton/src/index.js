const GameView = require('./game_view.js');
const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;


document.addEventListener('DOMContentLoaded', function() {
    const canvasElement = document.getElementById('game-canvas');
    canvasElement.width = 1000;
    canvasElement.height = 600;
    const ctx = canvasElement.getContext('2d');
    ctx.fillStyle = 'grey';
    // ctx.fillRect(0, 0, 1000, 600);
    
    const dummy = new GameView(ctx);
    dummy.start();
})

