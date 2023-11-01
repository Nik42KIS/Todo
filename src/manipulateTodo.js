import Todo from "./todos";

export function addTodo(title, description, dueDate, priority){
    localStorage.setItem('item',JSON.stringify(new Todo(title, description, dueDate, priority)) )
}



