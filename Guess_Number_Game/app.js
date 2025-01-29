//Get the DOM elements and initialize the game
const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

//Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random()*100);
console.log(randomNum);
chance = 10;

//Click event on the check button
checkButton.addEventListener("click", () =>{
    //Decrease the chance variable on every click
    chance--;
    //value from the input field
    let inputValue = input.value;
    //conditional statement to check the input value is equal to the random number
    if(inputValue == randomNum){
        //Update guessed number, disable input, check button text and color
        [guess.textContent, checkButton.disabled] = ["Congratulations", true];
        [checkButton.textContent, guess.style.color] = ["Replay", "#333"]
    }
});

