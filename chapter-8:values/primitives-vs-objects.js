'use strict';
//Objects are strictly equal to themselves, for they have a unique identity:
var obj1 = {};
var obj2 = {};
console.log('obj1 === obj2? ' + (obj1 === obj2));

var obj3 = obj1;
console.log('obj3 === obj1? ' + (obj3 === obj1));

//All primitive values are compared by value:
console.log('123 === 123? ' + (123 === 123));
var prim1 = 123;
var prim2 = 123;
console.log('prim1 === prim2? ' + (prim1 === prim2));
console.log("'abc' === 'abc'? " + ('abc' === 'abc'));

//primitive values are always immutable:
var prim3 = 'abcde';
console.log(prim3 + "'s length: " + prim3.length);
prim3.length = 2;
console.log(prim3 + "'s length: " + prim3.length);
prim3.foo = 'bar';
console.log(prim3.foo);
//Also, primitives are a fixed number of types, you can't define new ones

//Most common types of objects:
var plainObject = {
  firstName: 'José',
  lastName: 'Cueto'
}

var array = ['Haku', 'Kaya', 'Yoghurt', 'Molly'];

var regex = /^a+b+$/;
//Objects are muttable by default:
plainObject.foo = 'bar';
console.log(plainObject.foo);
