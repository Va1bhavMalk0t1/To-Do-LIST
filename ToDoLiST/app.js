const inp = document.querySelector("input"); 
const but = document.querySelector("button"); 
const todos = document.querySelector("#list"); 
const percent = document.querySelector("#percent"); 
const green = document.querySelector("#prgbar"); 

const todo = [];

but.addEventListener('click', () => { 
    todo.push({
        title: inp.value , 
        checked : false  
    }); 
    inp.value = ""; 
    render(); 
    updateProgressBar() ; 
});

const component = (currTodoEl, i) => { 
    let newDiv = document.createElement("div");
    newDiv.style.display = "flex"; 
    newDiv.style.gap = "1.5vw"; 
    newDiv.style.margin = "1vw 0 0.8vw 3vw ";

    let newTodo = document.createElement("h1");
    newTodo.style.color = "white" ; 
    newTodo.innerHTML = currTodoEl.title;

    let newDel = document.createElement("button");
    newDel.innerHTML = "Remove"; 
    newDel.style.borderRadius = "25px"
    newDel.style.padding = "1vh 1vw"

    let check = document.createElement("input") ; 
    check.type = "checkbox" ; 
    check.style.scale = "1.5" ;
    check.checked = currTodoEl.checked; 
    check.dataset.index = i; 

    check.addEventListener('change', () => {
        const index = check.dataset.index; 
        todo[index].checked = check.checked;
        updateProgressBar();
    });

    newDel.addEventListener('click', () => {
        todo.splice(i, 1); 
        render(); 
        updateProgressBar() ; 
    });
    
    newDiv.appendChild(check); 
    newDiv.appendChild(newTodo); 
    newDiv.appendChild(newDel); 
    
    return newDiv; 
}

const render = () => { 
    todos.innerHTML = "";
    for (let i = 0; i < todo.length; i++) { 
       let el = component(todo[i], i);
       todos.appendChild(el);   
       green.style.width = "0" ; 
       percent.innerHTML = "0%" ; 
    }
}


const updateProgressBar = () => {
    const total = todo.length;
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const numberOfCheckedCheckboxes = checkedCheckboxes.length;
    const prcnt = (total > 0) ? (numberOfCheckedCheckboxes / total) * 100 : 0;

    percent.innerHTML = `${prcnt.toFixed(1)}%`;
    const wid = (prcnt / 100) * 100 ; 
    green.style.width = `${wid}%`;
}
















