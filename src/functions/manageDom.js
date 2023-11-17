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
  const dialogForm = document.querySelector('.dialog_content');
  const dialogTitleInput = document.querySelector('.dialog_title');
  const dialogDescInput = document.querySelector('.dialog_description');
  const dialogPriorityInput = document.querySelector('.dialog_priority');

  btnOpenDialog.onclick = () => {
    dialog.showModal();
  };

  dialogAddTodo.addEventListener('click', (e) => {
    const dTitle = dialogTitleInput.value;
    const dDesc = dialogDescInput.value;
    const dPriority = dialogPriorityInput.value;
    const dDate = format(new Date(), 'dd/MM/yyyy');
    createTodo(dTitle, dDesc, dDate, dPriority);
    dialogForm.reset();
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
  const activeProject = document.querySelector('.active_project .project_name').textContent;
  renderTodo(activeProject);

  projectCreator.addEventListener('keypress', (e) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
      // code key Enter
      createProject(projectCreator.value);
      projectCreator.value = '';
      renderProject();
    }
  });
}

export default manageDom;
