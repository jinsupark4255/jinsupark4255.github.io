const input = document.querySelector(".app-insert input");//input 박스
const toDos = document.querySelector(".app-list");//만들어지는 박스

function addTask(task){
    let newTask = document.createElement("li");
    newTask.setAttribute("class","task");
    newTask.innerHTML = task + '<a href="javascript:;" class="remove-task">remove</a>' 
    let list= document.querySelector(".app-list ul");
    list.appendChild(newTask);
}


input.addEventListener("keyup",function(event) {
    if(event.keyCode === 13){
        if(input.value !== ""){
            addTask(input.value);
            input.value="";
        }
    }
},false);
