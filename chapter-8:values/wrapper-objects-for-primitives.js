'use strict';
console.log(typeof new String('abc'));
console.log('new String(\'abc\') === \'abc\'? ' + (new String('abc') === 'abc'));
console.log('typeof String(123): ' + (typeof String(123)));
console.log('typeof Number("123"): ' + (typeof Number("123")));

//Wrapper objects are different from primitives:
console.log("typeof 'abc': " + typeof 'abc');
console.log("typeof new String('abc'): " + typeof new String('abc'));
console.log("'abc' instanceof String? " + ('abc' instanceof String));
console.log("'abc' === new String('abc')? " + ('abc' === new String('abc')));

var a = new String('abc');
var b = new String('abc');
console.log(a === b);
console.log(a == b);

//Wrapping primitives:
new Boolean(true);
new Number(123);
new String('abc');

//Unwrapping values:
console.log(new Boolean(true).valueOf());
console.log(new Number(123).valueOf());
console.log(new String('abc').valueOf());

//Converting wrapper objects to primitives correctly extracts numbers and string but not booleans:
console.log(Boolean(new Boolean(false)));
console.log(Number(new Number(123)));
console.log(String(new String('abc')));

//Primitives borrow their methods from corresponding wrappers:
console.log("'xyz'.charAt === String.prototype.charAt ? " + ('xyz'.charAt === String.prototype.charAt));
