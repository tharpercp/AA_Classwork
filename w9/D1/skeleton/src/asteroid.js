const Util = require("./util.js");
const MovingObject = require("./moving_object.js")

Util.inherits(Asteroid, MovingObject);

function Asteroid(obj) {
  obj.vel = Util.randomVec(2);
  obj.rad = 25;
  obj.color = 'grey';

  MovingObject.call(this, obj)
}

let x = new Asteroid( { pos: [30, 30]} );
console.log(x);

module.exports = Asteroid;