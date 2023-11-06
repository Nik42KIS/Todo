import createTodo from './createTodo';
// createTodo(2,22,77777,2222)

function manageDom() {
  const dialog = document.getElementById('dialog');
  const dialogAddTodo = document.querySelector('.dialog_btn_create');
  const btnOpenDialog = document.querySelector('.add_todo');
  const dialog_form = document.querySelector('.dialog_content');

  btnOpenDialog.onclick = () => {
    console.log(`dialog: ${dialog}`);
    dialog.showModal();
  };

  dialogAddTodo.addEventListener('click', (e) => {
    const dTitle = document.querySelector('.dialog_title').value;
    const dDesc = document.querySelector('.dialog_description').value;
    const dPriority = document.querySelector('.dialog_priority').value;
    const dDate = document.querySelector('.dialog_date').value;
    createTodo(dTitle, dDesc, dPriority, dDate);
    dialog_form.reset();
  });
}

export default manageDom;
