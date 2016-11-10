'use strict';
//There is no way to overide operators in javascript
//Arrays don't work as expected with the + operator, they are converted into strings (that's their coercion) and concatenated:
console.log([1, 2] + [3]);
console.log(String([1, 2]));
console.log(String([3]));

//Assignment operators:
var x = 'value';
x = 'newValue';
var obj = {};
obj.aProperty = 'aProperty';
console.log(obj);
obj[obj.aProperty] = 'a new property';
console.log(obj);
var arr = [1, 2, 3];
console.log(arr);
arr[1] = 0;
console.log(arr);

//An assignment is an expression that evaluates to the assigned value:
var y, z;
z = y = 'value';
console.log('z: ' + z + ', y: ' + y);
console.log('z === y? ' + (z === y));

//Compund operators:
x = 1;
console.log(x);
x += 2;
console.log('x += 2: ' + x);
x -= 1;
console.log('x -= 1: ' + x);
x *= 2;
console.log('x *= 2: ' + x);
x /= 2;
console.log('x /= 2: ' + x);
x = 11;
console.log(x);
x %= 5;
console.log('x %= 5: ' + x);

y = 'abc';
y += 'def';
console.log(y);


//Comparisons:
console.log("NaN === NaN? " + (NaN === NaN)); //False, must check for NaN in some other way
console.log("x === x? " + (x === x));
console.log("+0 === -0 " + (+0 === -0));

console.log("x !== y? " + (x !== y));
console.log("!(x === y)? " + !(x === y));

//checking if x is truthy:
if (x) {
    console.log('x is truthy, its value is ' + x);
}
//Equivalent to:
if (x !== undefined && x !== null) {
    console.log('x is different from undefined nor null, x is truthy: ' + x);
}

x = '123';

//Try to compare numbers with numbers if that's what you're expecting:
console.log("Number(x) === 123? " + (Number(x) === 123));

//The comma operator:
console.log((123, 'abc'));
x = 0;
y = (x++, 10);
console.log(x);
console.log(y);

//Type of:
console.log("123: " + typeof(123));
console.log("'123':" + typeof('123'));
console.log("undefined: " + typeof(undefined));
console.log("null: " + typeof(null));
console.log("{}: " + typeof({}));
console.log("[]: " + typeof([]));
console.log("/^a+b+$/: " + typeof(/^a+b+$/));

//checking if object
function isObject(thing) {
    return (thing !== null &&
        typeof thing === 'object' || typeof thing === 'function');
}

console.log(isObject(123));
console.log(isObject('123'));
console.log(isObject(undefined));
console.log(isObject(null));
console.log(isObject({}));
console.log(isObject(isObject));


//Checking if a variable exists:
var foo;
console.log(typeof foo === 'undefined');

console.log(typeof bar === 'undefined');

console.log(foo === undefined);

//Throws an error: bar is not defined
try {
  console.log(bar === undefined);
} catch (e) {
  console.log(e);
}


//Instanceof:
console.log({} instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);

console.log(undefined instanceof Object);
console.log(null instanceof Object);
console.log(123 instanceof Object);
console.log('123' instanceof Object);
console.log(true instanceof Object);
