'use strict';
//Do not compare non integers directly:
console.log(0.1 + 0.2);
console.log(0.1 * Math.pow(10, 24));
console.log(0.1 + 1 - 1);
//Use an upper bound to compare non integers with a standard epsilon of 2^-53:
var EPSILON = Math.pow(2, -53);
function epsEqu(x, y) {
  return Math.abs(x - y ) < EPSILON;
}
console.log((0.1 + 0.2) === 0.3);
console.log(epsEqu((0.1 + 0.2), 0.3));
