//DOM elements selection
const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll("#prevNext"),
    numbers = document.querySelectorAll(".link");

//Setting an initial step
let currentStep = 0;

//Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", () => {
        //Set the current step to the clicked number link
        currentStep = numIndex;
        console.log(currentStep);
        //Remove the "active" class from the previously active number
        document.querySelector(".active").classList.remove("active");
        //Add the "active" class to the clicked number link
        number.classList.add("active")
    });
});