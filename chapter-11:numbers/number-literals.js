'use strict';
//Numbers in javascript are double (64 bit values).
console.log(35);
console.log(3.14);
console.log(0xFF);

console.log("5e2: " + 5e2);
console.log("5e3: " + 5e3);
console.log("5e-2: " + 5e-2);
console.log("0.5e2: " + 0.5e2);

//Invoking methods on number literals:
var x = typeof (123..toString()); //The first dot makes it believe it's a floating point number. Fix with a second dot ot with a preceding space:
console.log(x);
x = typeof (123 .toString());
console.log(x);
x = typeof (123.0.toString());
console.log(x);
x = typeof ((123).toString());
console.log(x);
