var array = ['a', 'b', 'c'];
console.log(array);
console.log(array.length);

array[array.length] = 'd';
console.log(array);

array.length = 2;
console.log(array);


var array = ['a', 'b', 'c', 'd'];
console.log('1 in array? ' + (1 in array));
console.log('5 in array? ' + (5 in array));


console.log('Slicing from 1: ' + array.slice(1));
console.log('Slicing from 1 to 2: ' + array.slice(1,2));
array.push('x');
console.log("Pushing x: " + array);
var popped = array.pop();
console.log("Popped " + popped + ": " + array);
var shifted = array.shift();
console.log("Shifting " + shifted + ": " + array);
array.unshift('a');
console.log("Prepended element with unshift " + array);

console.log('Index of b: ' + array.indexOf('b'));
console.log('Index of z: ' + array.indexOf('z'));

console.log(array.join('-'));
console.log(array.join(''));
console.log(array.join());


//Iterating over arrays:

['a', 'b', 'c'].forEach(function(elem, index) {
  console.log('index ' + index + ': ' + elem);
});

var array = ['a', 'b', 'c', 'd'];
var array2 = array.map(function(elem) {
  return elem + elem;
});

console.log(array);
console.log('vs');
console.log(array2);
