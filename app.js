'use strict';

let myName;

let usersName;

let message;

function getName(){
usersName = prompt('Who are you?');
document.write ('Hi, ' + usersName);
}

function makeMessage(){
    if (usersName == 'Kassie'){
    message = ', Thank you for being there to help me at the beginning of my coding journey, '
    } else if (usersName == '') {
    message = ", No Name! ";
    } else {
    message = ', Welcome to my site!';
    }
    document.write(message)
}

function showDisc(){
    let usersNum = prompt('How would you rate my page? 1-5');
    
    for (let i = 0; i < usersNum && i < 5; i++){
      document.write('<img src="disk.jpg" alt="Compact Disc" class="Disc"/>');
    }
  }