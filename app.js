'use strict';

// get proof of life, check the browser's developer Console
// console.log('Hello World!');
 
// declare a variable called x, assign it value of the value 10
let x = 10;
console.log(x);

// declare a variable called myName, it has no value
let myName;

// print the value of the variable to the console
console.log(myName);

// reassign the variable and print the new value
myName = 'Trace';
console.log(myName);

// reassign it again and print the new value
myName = 'Chris';
console.log(myName);

// prompt the user for some input, so you can use it later.
// hold its value in a variable called usersName
let usersName = prompt('What is your name?');

// declare a variable called message, it has no value (yet)
let message;

//structure of if/else conditional statement
// if (this condition evaluates to true) {execute this code} else {execute this code}

// if (usersName == 'Kassie'){
//   message = 'Hiya Teach!'
// } else {
//   message = 'Welcome to my site!';
// }

// how we can check multiple conditions using if/else if/else
  
// structure for this is:
// if (this condition evaluates to true) {execute this code} else if (this condition evaluates to true) {execute this code} else {execute this code} 

if (usersName == 'Kassie'){
  message = 'Thank you for being there to help me at the beginning of my coding journey,'
} else if (usersName == 'Ben') {
  message = "Hi Ben!";
} else if (usersName == 'Justin'){
  message = "Hi Justin!";
} else {
  message = 'Welcome to my site!';
}

// how we can use Javascript to put stuff on our HTML page
// document.write means write what's in the () to the HTML document
document.write('Hi ' + usersName);
document.write(message)
