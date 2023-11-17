function renderTodo(projectName) {
  const todos = document.querySelector('.todos');
  todos.innerHTML = '';

  const projectData = JSON.parse(localStorage.getItem(projectName)) || [];

  projectData.forEach((i) => {
    const note = document.createElement('div');
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

  todos.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete_todo_btn')) {
      const oldStore = projectData;
      const newStore = oldStore.filter((elem) => elem.id !== event.target.parentElement.id);
      localStorage.setItem(projectName, JSON.stringify(newStore));
      renderTodo(projectName);
    }
  });
}

export default renderTodo;
