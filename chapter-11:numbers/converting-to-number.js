'use strict';
//Converting to numbers:
console.log("Number(undefined): " + Number(undefined));
console.log("Number(null): " + Number(null));
console.log("Number(false): " + Number(false));
console.log("Number(true): " + Number(true));
console.log("Number(10): " + Number(10));
console.log("Number('4560'): " + Number('4560'));
var cueto = {
  name: 'José Alberto Cueto Bárcenas',
  age: 30,
  toString: function() {
    return this.name;
  },
  valueOf: function() {
    return this.age;
  }
};

console.log("Number(cueto): " + Number(cueto));

//Converting to number:
console.log("typeof Number('123'): " +  typeof Number('123'));
console.log("typeof +'123': " +  typeof +'123');

//parseFloat() vs Number() conversion
console.log("typeof parseFloat('123'): " + typeof parseFloat('123'));
console.log("parseFloat(true): " + parseFloat(true));
console.log("Number(true): " + Number(true));
console.log("parseFloat(false): " + parseFloat(false));
console.log("Number(false): " + Number(false));

console.log("parseFloat(null): " + parseFloat(null));
console.log("Number(null): " + Number(null));

console.log("parseFloat('1234.5#'): " + parseFloat('1234.5#'));
console.log("Number('1234.5#'): " + Number('1234.5#'));
console.log("parseFloat('\\t\\v\\r12.34\\n '): " + parseFloat('\t\v\r12.34\n '));
