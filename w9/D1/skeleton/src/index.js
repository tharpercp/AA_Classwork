const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', (events) => {
    const canvasElement = document.getElementById('game-canvas');
    canvasElement.getContext('2d');
} )