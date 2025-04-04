const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box"); //input-box class would be added through javascript

//create an input-box class element, inside notes-container class, through javascript
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(img);

});

//delete icon
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }    
})