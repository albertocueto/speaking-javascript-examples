function returnFoo(x) {
  return x.foo;
}

console.log(returnFoo(true));

try {
  console.log(returnFoo(undefined));
} catch (e) {
  console.log(e);
}

try {
  console.log(returnFoo(null));
} catch (e) {
  console.log(e);
}

//Uninitialized variables are undefined:
var foo;
console.log(foo);

//Missing params are undefined:
function missingParamsTest(x, y) {
  return [x, y];
}

console.log(missingParamsTest(1));

//nonexistent properties are undefined:
var obj = {};
console.log(obj.foo);

//functions implicity return undefined:
function returnsUndefined() {
  return;
}
console.log(returnsUndefined());

function alsoReturnsUndefined() {}
console.log(alsoReturnsUndefined());

//null is the last element in the prototype chain:
console.log(Object.getPrototypeOf(Object.prototype));
//null is also returned by Regex.prototype.exec() if there was no match:
console.log(/x/.exec('aaa'));

//Checking for undefined or null:
function hasValue(x) {
  if(x !== undefined && x !== null) {
    console.log('x has a value');
  } else {
    console.log('x has no value');
  }
}

var z;
hasValue(z);
hasValue(obj);
hasValue(/x/.exec('aaa'));

function hasValue2(x) {
  if(x) {
    console.log('x is truthy');
  } else {
    console.log('x is falsy');
  }
}

hasValue2(z);
hasValue2(obj);
