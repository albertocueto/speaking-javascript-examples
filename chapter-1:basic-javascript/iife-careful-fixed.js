var result = [];
for(var i = 0; i < 5; i++) {
  (function() {
    var i2 = i;
    result.push(function() { return i2 });
  })();
}

console.log(result[0]());
console.log(result[1]());
console.log(result[2]());
