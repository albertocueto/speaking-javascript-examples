'use strict';
console.log(5 + 3); //Numerical addition unless the other operand is a string, in that case, both operands are turned into strings.
console.log(5 - 3); //Substraction
console.log(5 * 3); //Multiplication
console.log(15 / 5); //Division
console.log(9 % 7); //Remainder
console.log(-9 % 7); //Warning: this operations is not the modulo, the value it returns is always the sign of the first operand
console.log(-10);
console.log(+10); //Leaves numbers just as they are, if it acts over a non number, it converts it to number
var x = 1;
console.log(++x);
console.log(x++);
console.log(x);
console.log(--x);
console.log(x--);
console.log(x);


//Returning to modulo, this function is wrong:
function isOddWrong(n) {
  return n % 2 === 1;
}

console.log(isOddWrong(3));
console.log(isOddWrong(4));
console.log(isOddWrong(-3));
console.log(isOddWrong(-4));

//The correct version is to make absolute the result of the reminder operation:

function isOdd(n) {
  return Math.abs(n % 2) === 1;
}

console.log(isOdd(3));
console.log(isOdd(4));
console.log(isOdd(-3));
console.log(isOdd(-4));
