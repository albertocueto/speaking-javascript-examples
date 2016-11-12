'use strict';
/* Infintiy is an error value used to represent any of two problems:
/* 1) a division by zero has occurred.
/* 2) a number is too big to represent.
*/
console.log("123/0: " + 123/0);
console.log("123456e123456: " + 123456e123456);

//Infinity is larger than any other number, except for NaN.
//-Infinity is smaller than any other number, except for NaN.
//These are useful when looking for default minimums and maximums.

//Largest numbers that can be represented:
console.log(Math.pow(2, 1023));
console.log(Math.pow(2, 1024));

//There is a function isFinite to check if something is a finite number:
console.log(isFinite(5));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));
console.log(isFinite(''));
