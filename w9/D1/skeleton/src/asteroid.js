const Util = require("./util.js");
const MovingObject = require("./moving_object.js")

function Asteroid(obj, game) {
  obj.vel = Util.randomVec(1);
  obj.rad = 30;
  obj.color = 'red';

  MovingObject.call(this, obj, game)
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;