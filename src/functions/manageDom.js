import { format } from 'date-fns';
import createProject from './createProject';
import createTodo from './createTodo';
import renderProject from './renderProject';
import renderTodo from './renderTodo';

function manageDom() {
  //! ABOUT DIALOG

  const dialog = document.getElementById('dialog');
  const dialogAddTodo = document.querySelector('.dialog_btn_create');
  const btnOpenDialog = document.querySelector('.add_todo');
  const dialog_form = document.querySelector('.dialog_content');

  btnOpenDialog.onclick = () => {
    dialog.showModal();
  };

  dialogAddTodo.addEventListener('click', (e) => {
    const dTitle = document.querySelector('.dialog_title').value;
    const dDesc = document.querySelector('.dialog_description').value;
    const dPriority = document.querySelector('.dialog_priority').value;
    const dDate = format(new Date(), 'dd/MM/yyyy');
    createTodo(dTitle, dDesc, dDate, dPriority);
    dialog_form.reset();
  });

  //! ABOUT PROJECTS
  const projectList = document.querySelector('.project_list');
  const projectCreator = document.querySelector('.project-creator');
  if (!localStorage.getItem('projectList')) {
    createProject('Coming up!');
    createProject('Plans');
    renderProject();
  }

  projectList.firstChild.classList.add('active_project');
  const activeProject =
    document.getElementsByClassName('active_project')[0].firstElementChild.textContent;
  renderTodo(activeProject);

  projectCreator.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
      // код клавиши Enter
      createProject(projectCreator.value);
      projectCreator.value = '';
      renderProject();
    }
  });
}

export default manageDom;
