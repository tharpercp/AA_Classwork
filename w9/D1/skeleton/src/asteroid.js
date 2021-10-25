const Util = require("./util.js");
const MovingObject = require("./moving_object.js")

Util.inherits(Asteroid, MovingObject);

function Asteroid(obj) {
  obj.vel = Util.randomVec(1);
  obj.rad = 25;
  obj.color = 'grey';

  MovingObject.call(this, obj)
}

module.exports = Asteroid;