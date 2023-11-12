// import store from "./store"

function renderTodo(projectName){

 
        const todos = document.querySelector('.todos');
        todos.innerHTML = '';
        console.log()
  if(localStorage.getItem(projectName)){
    JSON.parse(localStorage.getItem(projectName)).forEach((i) =>{
        let note = document.createElement('div');
        note.innerHTML = `
        <div class="note_title">title: ${i.title}</div>
        <div class="note_priority">priority: ${i.priority}</div>
        <div class="note_description"> desc: ${i.description}</div>
        <div class="note_date">date: ${i.dueDate}</div>
        <button class='delete_todo_btn'>Delete</button>
        <button class='complete_todo_btn'>Complete</button>
        `
        note.classList.add('note')
        todos.appendChild(note)
        
        
     
    
    
    }
    )}
}

export default renderTodo