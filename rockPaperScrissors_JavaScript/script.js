//DOM elements
const container = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    computerResult = document.querySelector(".computer_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

    // console.log(container, userResult, computerResult, result, optionImages);

    //loop through each option image element
    optionImages.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            image.classList.add("active");

            //Loop through each option image again
            optionImages.forEach((image2, index2) => {
                //If the current index doesn't match the clicked index
                //Remove the "active" class from the other option images 
                index !== index2 && image2.classList.remove("active");                
            });            
        });
    });