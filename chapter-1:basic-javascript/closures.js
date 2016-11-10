function createIncrementor(start) {
  return function() {
    start++;
    return start;
  }
}

var inc = createIncrementor(10);
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
