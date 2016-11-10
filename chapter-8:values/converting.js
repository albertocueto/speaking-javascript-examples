'use strict';

//Boolean()
console.log('Boolean conversion');
console.log('\nFalsys:');
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

console.log('\nTruthys:');
console.log(Boolean('abc'));
console.log(Boolean(true));
console.log(Boolean(56));
console.log(Boolean({}));

console.log('\nNumber conversion');
console.log("Number(123): " + Number(123));
console.log("Number(undefined): " + Number(undefined));
console.log("Number(null): " + Number(null));
console.log("Number(false): " + Number(false));
console.log("Number(true): " + Number(true));
console.log("Number({parseme: '456'}): " + Number({parseme: '456'}));

console.log('\nString conversion');
console.log(typeof String(123));
console.log(typeof String(null));
console.log(typeof String(NaN));
console.log(typeof String({parseme: '456'}));

console.log('\nObject conversion');
var obj = {};
console.log("Object(obj) === obj? " + (Object(obj) === obj));
console.log(Object(undefined));
console.log("Object('string') instanceof String? " + (Object('string') instanceof String));

var obj = {
  name: 'Alberto Cueto',
  birthYear: 1986,
  valueOf: function() { return this.birthYear; },
  toString: function() { return this.name; }
}

console.log(obj);
console.log(Number(obj));
console.log(String(obj));
