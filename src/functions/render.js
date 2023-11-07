// import store from "./store"

function render(curProject){

 
        const todos = document.querySelector('.todos');
        todos.innerHTML = '';
  if(localStorage.getItem('curProject')){
    JSON.parse(localStorage.getItem('curProject')).forEach((i) =>{
        let note = document.createElement('div');
        note.innerHTML = `
        <div class="note_title">title: ${i.title}</div>
        <div class="note_priority">priority: ${i.priority}</div>
        <div class="note_description"> desc: ${i.description}</div>
        <div class="note_date">date: ${i.dueDate}</div>
        `
        note.classList.add('note')
        todos.appendChild(note)
        
        localStorage.getItem('projects')
        
     
    
    
    }
    )}
}

export default render