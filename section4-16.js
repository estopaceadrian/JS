function greet(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}

console.log(greet('Good Morning')('James'));

const friends = ['Nate', 'Jim', 'Scot', 'Dean '];

const friendsGreeting = friends.map(greet('Good Morning'));

console.log(friendsGreeting);
