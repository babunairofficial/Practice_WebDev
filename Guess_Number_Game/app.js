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
        [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
    }
    //Check if input value > random number and within 1-100
    else if(inputValue > randomNum && inputValue <= 100){
        //Update the guess text and chances left
        [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
        guess.style.color = "#333"; 
    }
    //Check if input value < random number and within 1 - 100 range
    else if(inputValue < randomNum && inputValue >= 1){
        [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
        guess.style.color = "#333"; 
    }
    //If the input value is not within the range of 1 to 100
    else{
        //Update the guessed number text, color and chances left
        [guess.textContent, remainChances.textContent] = ["Your guess is beyond the range", chance];
        guess.style.color = "red"; 
    }
    //Check if the chance is zero
    if(chance == 0){
        //Update check button, diable input, and clear input value.
        //Update guessed number text and color to indicate guessing failure.
        [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, guess.style.color] = ["Sorry! Game over", "red"]
    }
    //reload the current document
    if(chance < 0){
        window.location.reload();
    }
});

