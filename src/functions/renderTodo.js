

function renderTodo(projectName) {
  const todos = document.querySelector('.todos');
  todos.innerHTML = '';
  console.log();
  if (localStorage.getItem(projectName)) {
    JSON.parse(localStorage.getItem(projectName)).forEach((i) => {
      let note = document.createElement('div');
      note.innerHTML = `
        <div>
            <div class="note_title">Title: ${i.title}</div>
            <div class="note_priority">Priority: ${i.priority}</div>
        </div>
        <div>
            <div class="note_description"> Description: ${i.description}</div>
            <div class="note_date">${i.dueDate}</div>
        </div>
        <button class='delete_todo_btn'>Delete</button>
        `;
      note.id = i.id;
      note.classList.add('note');
      todos.appendChild(note);
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
