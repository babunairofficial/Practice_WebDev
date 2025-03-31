const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
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
}
console.log(inputBox, listContainer);