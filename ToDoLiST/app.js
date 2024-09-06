const input = document.querySelector("input"); 
const add = document.querySelector("#add"); 

let divNo = 0;
let delNo = 0;

// Adding ToDo Element
add.addEventListener("click", () => { 
    // creating Div For Element 
    divNo += 1; 
    let newDiv = document.createElement("div"); 
    newDiv.id = `div-${divNo}`; 
    newDiv.style.display = "flex"; 
    newDiv.style.alignItems = "center"; 
    newDiv.style.gap = "2vw"; 

    let parent = document.querySelector("#tasks"); 
    parent.appendChild(newDiv);

    // creating ToDo Element
    let newEl = document.createElement("h3"); 
    newEl.innerHTML = input.value; 
    newDiv.appendChild(newEl); 

    // creating delete button 
    delNo += 1; 
    let newDel = document.createElement("button"); 
    newDel.id = `del-${delNo}`;
    newDel.className = "delete"; 
    newDel.style.fontSize = "1vw"; 
    newDel.style.marginLeft = "2vw"; 
    newDel.style.padding = "0.5vw"; 
    newDel.innerHTML = "Delete This";

    // Appending the delete button to the div
    newDiv.appendChild(newDel);

    // Adding event listener for delete button
    newDel.addEventListener("click", () => deleteThis(newDiv.id));

    // Clearing The InnerHtml 
    input.value = "" ; 
}); 

// Making Delete This Button Work 
const deleteThis = (id) => { 
    let deleting = document.querySelector(`#${id}`); 
    let parent = document.querySelector("#tasks"); 
    parent.removeChild(deleting); 
};




