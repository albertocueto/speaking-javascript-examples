'use strict';

console.log("Boolean(undefined): " + Boolean(undefined));
console.log("Boolean(null): " + Boolean(null));
console.log("Boolean(true): " + Boolean(true));
console.log("Boolean(false): " + Boolean(false));
console.log("Boolean(0): " + Boolean(0));
console.log("Boolean(NaN): " + Boolean(NaN));
console.log("Boolean(1): " + Boolean(1));
console.log("Boolean(123456): " + Boolean(123456));
console.log("Boolean(''): " + Boolean(''));
console.log("Boolean('abc'): " + Boolean('abc'));
console.log("Boolean([]): " + Boolean([]));
console.log("Boolean({}): " + Boolean({}));

//Ways to convert to a boolean:
var x = 123;
console.log(Boolean(x));
console.log(x? true:false);
console.log(!!x);

//Al objects are truthy:
console.log("Boolean(new Boolean(false)): " + Boolean(new Boolean(false)));
console.log("Boolean({}): " + Boolean({}));
console.log("Boolean([]): " + Boolean([]));

//Logical AND &&
//If the firts operand can be converted to false, return it, otherwise return the second:
x = false && true;
console.log(x);
x = 123 && 345;
console.log(x);

//Logical OR ||
//If the first operan can be converted to true, return it, otherwise, return the second:
x = false || true;
console.log(x);
x = 123 || 345;
console.log(x);


//Default value pattern:
function saveText(text) {
  text = text || '';
  console.log(text);
}

//A default for the result of a function:
function countOcurrences(regex, str) {
  return (str.match(regex) || []).length;
}
