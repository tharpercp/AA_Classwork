

function MovingObject(object, game) {
    this.pos = object.pos;
    this.vel = object.vel;
    this.rad = object.rad;
    this.color = object.color;
    this.game = game;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.rad,
        0,
        2 * Math.PI,
        false
    )
    ctx.fill();
}

MovingObject.prototype.move = function () {
    let pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    this.pos = this.game.wrap(pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let sumOfRadii = this.rad + otherObject.rad;
    let x = Math.pow(Math.abs(this.pos[0] - otherObject.pos[0]), 2);
    let y = Math.pow(Math.abs(this.pos[1] - otherObject.pos[1]), 2);
    let d = Math.sqrt(x + y);
    return sumOfRadii >= d;
}

module.exports = MovingObject;