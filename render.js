import store from "./store"

function render(){
    const todos = document.querySelector('.todos');
    console.log(store().curProject)

    JSON.parse(localStorage.getItem('curProject')).forEach((i) =>{
        let note = document.createElement('div');
        note.innerHTML = `
        <div class="note_title">${i.title}</div>
        <div class="note_priority">${i.priority}</div>
        <div class="note_description">${i.description}</div>
        <div class="note_date">${i.dueDate}</div>
        `
        note.classList.add('note')
        todos.appendChild(note)
 
        
    })
    }

export default render