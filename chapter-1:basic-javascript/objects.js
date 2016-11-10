'use strict';
var cueto = {
  name: 'José Alberto Cueto Bárcenas',
  describe: function() {
    return 'My name is ' + this.name;
  }
};

console.log(cueto.name);
console.log(cueto.describe());

var describe = cueto.describe;

try {
  describe();
} catch (e) {
  console.log('Error using erronuosly the describe function: ' + e)
}

var describe2 = cueto.describe.bind(cueto);

console.log(describe2());

console.log('describe in cueto? ' + ('describe' in cueto));
console.log('nickname in cueto? ' + ('nickname' in cueto));
