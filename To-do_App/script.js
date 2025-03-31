const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ""){
        alert("Input box cannot be left empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //call the function to save data everytime a new data is added.
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); //call the function to save data everytime task is checked or unchecked.
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); // call the function to save data everytime task is removed.
    }
}, false);
console.log(inputBox, listContainer);

//save data function
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//display data everytime browser is refreshed. 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();