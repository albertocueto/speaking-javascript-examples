'use strict';
//The function Number() can be used in two different ways:
//To convert to a number, use it as a normal function:
console.log(typeof Number(3));
//As a constructor to create a wrapper of number:
console.log(typeof new Number(3));
//Number constructor properties:
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NAN);
console.log(Number.POSITIVE_INFINITY);
//All methods of number primitives are stored
console.log(0.00000003.toFixed(10));
console.log(0.00000003.toString());
//If the number is greater than or equal to 10^21 then it behaves just like toString:
console.log(12345678890123456789012..toFixed());
console.log(12345678890123456789012..toString());
//toPrecision(precision): prunes the mantissa to preecision digits before using a conversion algorithm similar to toString:
console.log(1234..toPrecision(3));
console.log(1234..toPrecision(4));
console.log(1234..toPrecision(5));
console.log(1.234.toPrecision(3));
console.log(1234..toPrecision(10));
//Number.prototype.toString(radix): radix indicates the base of the system in which to print the number as a string:
console.log(15..toString(2));
console.log(65535..toString(16));
//radix must be at least 2 and at most 36. 36 because the latin alphabet contains 26 characters. 10 numbers plus 26 characters: 36
console.log(1234567890..toString(36));
console.log(parseInt(1234567890..toString(36), 36));
//Decimal exponential notation:
//After 21 digits before the decimal point of a number:
console.log(1234567890123456789012);
console.log(123456789012345678901); // <- WTF??
//if a number starts with 0. followe dby more than five zeroes and a non zero digit:
console.log(0.00000007);
console.log(0.000005);
console.log(0.0000006);
//Functions for numbers:
console.log("isFinite(x)");
console.log(isFinite(0));
console.log(isFinite(5));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

console.log("isNaN(x)");
console.log(isNaN(""));
console.log(isNaN("cueto"));
console.log(isNaN(0));
console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN(NaN));

console.log("parseFloat(x)");
console.log(parseFloat('100.23'));
console.log(parseFloat('100'));

console.log("parseInt(x)");
console.log(parseInt('100.23'));
console.log(parseInt('100'));
