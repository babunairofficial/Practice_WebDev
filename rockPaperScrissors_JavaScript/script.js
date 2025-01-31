//DOM elements
const container = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    computerResult = document.querySelector(".computer_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

    console.log(container, userResult, computerResult, result, optionImages);

    //loop through each option image element
    optionImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            image.classList.add("active");
        })
    })