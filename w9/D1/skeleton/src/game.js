const Asteroid = require("./asteroid");

function Game () {
    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    const asteroids = [];
    while (asteroids.length < this.NUM_ASTEROIDS) {
        let pos = this.randomPos();
        asteroids.push(new Asteroid({"pos": pos }))
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
            x = this.DIM_X;
            y = Math.floor(Math.random() * this.DIM_Y);
        break;
        case 3:
            y = this.DIM_Y;
            x = Math.floor(Math.random() * this.DIM_X);
        break;
    }
    return [x, y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, 1000, 600);
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].draw(ctx)
    }
}

Game.prototype.moveObjects = function () {
    for (let i = 0; i < this.asteroids.length; i++) {
        this.asteroids[i].move();
    }
}

module.exports = Game;
