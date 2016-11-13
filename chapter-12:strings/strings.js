'use strict';
//There are two types of string literals:
console.log('I said hello\n');
console.log("You said goodbye\n");
console.log('Everyone\'s a winner!!');
console.log("Everyone's a winner!!");
//Line continuations:
var str = 'written \
over \
multiple \
lines';

console.log(str === 'written over multiple lines');

str = 'written ' +
'over ' +
'multiple ' +
'lines';

//Character escape sequences:
console.log('\"');
console.log('\\');
console.log('\q');
console.log('null character: "\0"');

//Hexadecimal escape sequence "\xHH":
console.log('\x4D');
//Unicode escape sequences "\uHHHH" (UTF-16 code unit):
console.log('\u004D');
console.log('pi: \u03C0');

//Accessing characters:
console.log('abc'.charAt(2));
console.log('abc'[2]); //Not supported by some old browsers

//Converting to a string:
console.log(String(3));
console.log(String({}));
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(NaN));
console.log(String("Cueto"));
console.log(String(['a', 'b', 'c']));

console.log(typeof (3 + ''));
console.log(typeof (3..toString())); //Does not work for undefined and null

//JSON.stringify works better that the previous methods for objects:
console.log(JSON.stringify({firstname: 'Alberto', lastname: 'Cueto'}));
console.log(JSON.stringify(['a', 'b', 'c']));

//Concatenating anarray of strings:
var arr = [];
arr.push('Say hello');
arr.push(' to my');
arr.push(' little friend!');
arr.push('!!!!!!!!!!!!!!!');

console.log(arr.join(''));

//The function String()
//As a normal function, it will transform to strings:
console.log(typeof String(123456));
var newstr = new String(123456);
console.log(typeof newstr);

//String.fromCharCode() -> produces a string of the concatenation of the characters represented by the unicodes:
console.log(String.fromCharCode(97, 98, 99));

//Using the apply function:
//Send an array instead of parameters:
arr = [97, 98, 99];
console.log(String.fromCharCode.apply(null, arr));
console.log('abc'.length);

//String prototype methods:
var teststr = 'abcdefghijklm';
console.log("String.slice(start, end)");
//You could also use String.substring(start, end?), but slice is more standardly implemented.
console.log(teststr.slice(2));
console.log(teststr.slice(3, 5));
console.log(teststr.slice(-2));

console.log("String.charAt(start, end)");
console.log(teststr.charAt(5));
console.log(teststr.charCodeAt(5));

console.log(teststr.split('').map(function(x) {return x.charCodeAt(0)}));

var splitTest = 'a, b,c, d, e f';
console.log("String.split(separator?, limit?)");
console.log(splitTest.split(','));
console.log(splitTest.split(/,/));
console.log(splitTest.split(/, */, 2));
console.log(splitTest.split());
console.log(typeof splitTest.split('')); //Produces an array with the characters from the string
console.log(splitTest.split('') instanceof Array);

var indexofteststr = "aXaXaX";
console.log('String.indexOf(searched)');
console.log(indexofteststr.indexOf('X'));
console.log(indexofteststr.indexOf('X', 2));
//Just like a regex when seraching for a string:
console.log(indexofteststr.indexOf('aX') >= 0);
console.log(/aX/.test('aX'));

console.log('String.lastIndexOf(searched)');
console.log(indexofteststr.lastIndexOf('X'));
console.log(indexofteststr.lastIndexOf('X', 2));
//Just like a regex when seraching for a string:
console.log(indexofteststr.lastIndexOf('aX') >= 0);
