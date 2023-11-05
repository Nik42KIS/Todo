import createTodo from "./functions/createTodo";
import render from "../render";
import './style.css'
// createTodo(2,22,77777,2222)
const dialog = document.getElementById('dialog')
console.log(`dialog: ${dialog}`);

const btnAddTodo = document.querySelector('.add_todo');

btnAddTodo.onclick = () =>{
    console.log(`dialog: ${dialog}`);
    dialog.showModal()
    // createTodo(1,2,3,4)
}