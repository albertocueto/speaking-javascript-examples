function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.dist = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};

var p = new Point(2, 3);
var p2 = new Point(3, 4);

console.log(p.x);
console.log(p.y);

console.log(p.dist());
console.log(p2.dist());

console.log('p instanceof Point? ');
console.log(p instanceof Point);

console.log('p instanceof Point? ' + (p instanceof Point));
