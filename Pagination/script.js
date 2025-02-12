//DOM elements selection
const startBtn = document.querySelector("#startBtn"),
    endBtn = document.querySelector("#endBtn"),
    prevNext = document.querySelectorAll(".prevNext"),
    numbers = document.querySelectorAll(".link");

//Setting an initial step
let currentStep = 0;

//Add event listeners to the number links
numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (e) => {
        e.preventDefault();
        //Set the current step to the clicked number link
        currentStep = numIndex;
        console.log(currentStep);
        //Remove the "active" class from the previously active number
        document.querySelector(".active").classList.remove("active");
        //Add the "active" class to the clicked number link
        number.classList.add("active");
    });
});

//Add event listerners to the "Previous" and "Next" buttons
prevNext.forEach(button => {
    button.addEventListener("click", (e) => {
        //Increment or decrement the current step based on the button clicked
        currentStep += e.target.id === "next" ? 1 : -1;
        // console.log(currentStep);
        numbers.forEach((number, numIndex) => {
            // console.log(numIndex, currentStep);
            //Toggle the "active" class on the numebr links based on the button clicked
            number.classList.toggle("active", numIndex === currentStep);
        })
    });
});