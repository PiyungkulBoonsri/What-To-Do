let allToDos = [];

function AddToDo(){
  var todo = document.getElementById("todo").value;
  allToDos.push(todo);
  UpdateList();
}
function PopToDo(){
  allToDos.pop();
  UpdateList();
}
function ShiftToDo(){
  allToDos.shift();
  UpdateList();
}
function UpdateList(){
  var completeList = "";
  for(let i = 0; i < allToDos.length; i++){
    completeList += "<li style='padding: 2px;'>" + allToDos[i] + "</li>";
  }
  document.getElementById("list").innerHTML = completeList;
}