const Asteroid = require("./asteroid");

function Game () {
    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
}

Game.BG_COLOR = 'black';

Game.prototype.addAsteroids = function() {
    const asteroids = [];
    while (asteroids.length < this.NUM_ASTEROIDS) {
        let pos = this.randomPos();
        asteroids.push(new Asteroid({"pos": pos }, this))
    }
    return asteroids; 
}

Game.prototype.randomPos = function () {
    let x;
    let y;
    switch (Math.floor(Math.random() * 4)) {
        case 0: 
            x = 0;
            y = Math.floor(Math.random() * this.DIM_Y);
        break;
        case 1:
            y = 0;
            x = Math.floor(Math.random() * this.DIM_X);
        break;
        case 2:
            x = this.DIM_X - 1;
            y = Math.floor(Math.random() * this.DIM_Y);
        break;
        case 3:
            y = this.DIM_Y - 1;
            x = Math.floor(Math.random() * this.DIM_X);
        break;
    }
    return [x, y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx)
    }
    ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0,this.DIM_X, this.DIM_Y);
}

Game.prototype.moveObjects = function () {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
        pos = [999, pos[1]]
    } else if (pos[0] > 999) {
        pos = [0, pos[1]]
    } else if (pos[1] < 0) {
        pos = [pos[0], 599]
    } else if (pos[1] > 599) {
        pos = [pos[0], 0]
    }
    return pos;
}

module.exports = Game;
