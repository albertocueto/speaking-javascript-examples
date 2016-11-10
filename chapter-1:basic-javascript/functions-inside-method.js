'use strict';

var cueto = {
  name: 'José Alberto Cueto Bárcenas',
  friends: ['Haku', 'Kaya', 'Molly', 'Yoghurt'],
  sayHiToFriends: function() {
    this.friends.forEach(function(friend) {
      console.log(this.name + ' says hi to ' + friend);
    });
  }
}

try {
  cueto.sayHiToFriends();
} catch(exception) {
  console.log('Error greeting friends: ' + exception);
}

cueto = {
  name: 'José Alberto Cueto Bárcenas',
  friends: ['Haku', 'Kaya', 'Molly', 'Yoghurt'],
  sayHiToFriends: function() {
    var that = this;
    this.friends.forEach(function(friend) {
      console.log(that.name + ' says hi to ' + friend);
    });
  }
}

cueto.sayHiToFriends();


cueto = {
  name: 'José Alberto Cueto Bárcenas',
  friends: ['Haku', 'Kaya', 'Molly', 'Yoghurt'],
  sayHiToFriends: function() {
    this.friends.forEach(function(friend) {
      console.log(this.name + ' says hi to ' + friend);
    }, this);
  }
}

cueto.sayHiToFriends();
