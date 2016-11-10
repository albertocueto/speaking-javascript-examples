var result = [];
for(var i = 0; i < 5; i++) {
  result.push(function() { return i });
}

console.log(result[0]());
console.log(result[1]());
console.log(result[2]());
