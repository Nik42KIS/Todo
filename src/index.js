import createTodo from "./functions/createTodo";
import render from "../render";

// createTodo(2,22,77777,2222)



const btnAddTodo = document.querySelector('.add_todo');

btnAddTodo.onclick = () =>createTodo(2,22,77777,2222)