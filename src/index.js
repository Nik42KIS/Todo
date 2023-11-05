import createTodo from "./functions/createTodo";
import render from "../render";
import './style.css'
// createTodo(2,22,77777,2222)
const dialog = document.getElementById('dialog')
const dialogAddTodo = document.querySelector('.dialog_btn_create')
console.log(`dialog: ${dialog}`);

const btnOpenDialog = document.querySelector('.add_todo');

btnOpenDialog.onclick = () =>{
    console.log(`dialog: ${dialog}`);
    dialog.showModal()
    // createTodo(1,2,3,4)
}

dialogAddTodo.addEventListener('click', (e)=>{
const dTitle = document.querySelector('.dialog_title').value;
const dDesc = document.querySelector('.dialog_description').value;
const dPriority = document.querySelector('.dialog_priority').value;
const dDate = document.querySelector('.dialog_date').value;
createTodo(dTitle,dDesc,dPriority,dDate)
})

{/* <form method="dialog" class="dialog_content" action="">
        <input type="text" class="dialog_title" placeholder="Title">
        <input type="text" class="dialog_description" placeholder="Description">
        <input type="text" class="dialog_priority" placeholder="Priority">
        <input type="text" class="dialog_date" placeholder="Date">
        <button class="dialog_btn_create">Create</button>
      </form> */}