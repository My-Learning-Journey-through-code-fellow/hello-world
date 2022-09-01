'use strict';

let myName;

myName = 'Trace';
console.log(myName);

myName = 'Chris';
console.log(myName);

let usersName = prompt('Who are you?');

let message;

if (usersName == 'Kassie'){
  message = ', Thank you for being there to help me at the beginning of my coding journey, '
} else if (usersName == '') {
  message = ", No Name! ";
} else {
  message = ', Welcome to my site!';
}

document.write('Hi ' + usersName);
document.write(message)
