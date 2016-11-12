'use strict';
//NaN cases:
console.log("typeof NaN: " + typeof NaN);
console.log("Number('cueto'): " +  Number('cueto'));
var undefinedVariable;
console.log("Number(undefinedVariable): " +  Number(undefinedVariable));

//Math operations failure:
console.log("Math.acos(2): " + Math.acos(2));
console.log("Math.log(-1): " + Math.log(-1));
console.log("Math.sqrt(-1): " + Math.sqrt(-1));
console.log("NaN + 3: " + (NaN + 3));
console.log("25 / NaN: " + (25 / NaN));

//NaN is the only value that is not equal to itself:
console.log("NaN === NaN? " + (NaN === NaN));
//You can't search for NaN in an array:
console.log("[ NaN ].indexOf(NaN): " + [ NaN ].indexOf(NaN));
//There is a global function isNaN to check for NaNs:
console.log("isNaN(NaN)? " + isNaN(NaN));
console.log("isNaN(33)? " + isNaN(33));
console.log("isNaN('123')? " + isNaN('123'));
console.log("isNaN('cueto')? " + isNaN('cueto')); //This true is confusing. For that reason, use isNaN along with a type check:
function myIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}

console.log(myIsNaN(NaN));
console.log(myIsNaN('cueto'));
console.log(myIsNaN(123));
console.log(myIsNaN('123'));

function myOtherIsNaN(value) {
  return value !== value;
}

console.log(myOtherIsNaN(NaN));
console.log(myOtherIsNaN('cueto'));
console.log(myOtherIsNaN(123));
console.log(myOtherIsNaN('123'));
