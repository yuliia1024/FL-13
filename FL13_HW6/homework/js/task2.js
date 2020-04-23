'use strict';
let userInput = prompt('input a word', '');
let check = false;
for (let i of userInput){
    if(i === ' ' || i ===''){
        check =false;
    } else {
        check =true;
    }
}
if(check === true){
    if (userInput.length % 2 === 1) {
        alert(userInput[Math.floor(userInput.length / 2)])
    } else {
        alert(userInput[userInput.length / 2 - 1] + ', ' + userInput[userInput.length / 2]);
    }
} else {
    alert('Invalid value');
}
