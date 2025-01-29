//Get the DOM elements and initialize the game
const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

//Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random()*100);
chance = 10;