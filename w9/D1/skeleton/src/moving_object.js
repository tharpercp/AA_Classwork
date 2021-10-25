function MovingObject(object) {
    this.pos = object[pos];
    this.vel = object[vel];
    this.rad = object[rad];
    this.color = object[color];

}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
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
    this.pos += this.vel;
}




module.exports = MovingObjects;