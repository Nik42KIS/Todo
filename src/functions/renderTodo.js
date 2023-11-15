// import store from "./store"
import createTodo from './createTodo'

function renderTodo(projectName) {
  const todos = document.querySelector('.todos');
  todos.innerHTML = '';
  console.log();
  if (localStorage.getItem(projectName)) {
    JSON.parse(localStorage.getItem(projectName)).forEach((i) => {
      let note = document.createElement('div');
      note.innerHTML = `
        <div class="note_title">title: ${i.title}</div>
        <div class="note_priority">priority: ${i.priority}</div>
        <div class="note_description"> desc: ${i.description}</div>
        <div class="note_date">date: ${i.dueDate}</div>
        <button class='delete_todo_btn'>Delete</button>
        `;
      note.id = i.id;
      note.classList.add('note');
      todos.appendChild(note);

      /////////////////////////

    //   const dialog = document.getElementById('dialog_edit_todo');
    //   const dialogTitle = document.getElementById('dialog_title_edit');
    //   const dialogDescription = document.getElementById('dialog_description_edit');
    //   const dialogPriority = document.getElementById('dialog_priority_edit');
    //   const dialogDate = document.getElementById('dialog_date_edit');
    //   const saveTodoBtn = document.querySelector('.dialog_btn_save');

    //   const editTodoBtn = document.querySelector('.edit_todo_btn');

    //   editTodoBtn.addEventListener('click', (event) => {
    //     dialog.showModal();

    //     const oldS = JSON.parse(localStorage.getItem(projectName));

        
    //     const newS = oldS.filter((elem) => {
         
    //       return elem.id == event.target.parentElement.id 
    //     });

       
    //     const updatedArr = oldS.filter((elem) => {
    //       return elem.id != event.target.parentElement.id 
    //     });
    //    console.log('upd:', updatedArr)
    //     const dTitle = newS[0].title;
    //     const dDesc = newS[0].description;
    //     const dPriority = newS[0].priority;
    //     const dDate = newS[0].dueDate;
        
    //     dialogTitle.value = dTitle;
    //     dialogDescription.value = dDesc;
    //     dialogPriority.value = dPriority;
    //     dialogDate.value = dDate;

       
    //     let todo = createTodo(dialogTitle.value,dialogDescription.value,dialogPriority.value,dialogDate.value)
    //     updatedArr.push(todo)
    //     localStorage.setItem(projectName, JSON.stringify(updatedArr))
 
    //   });

    //   saveTodoBtn.addEventListener('click', (event) => {
    //     renderTodo(projectName)
    //   });

    });

    const deleteTodoBtn = document.querySelectorAll('.delete_todo_btn');

    deleteTodoBtn.forEach((item) => {
      item.addEventListener('click', (event) => {
        const oldStore = JSON.parse(localStorage.getItem(projectName));

        const newStore = oldStore.filter((elem) => {
          return elem.id != event.target.parentElement.id;
        });

        localStorage.setItem(projectName, JSON.stringify(newStore));
        renderTodo(projectName);
      });
    });

  }
}

export default renderTodo;
