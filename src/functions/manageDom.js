import checkActiveProject from './checkActivePr';
import createProject from './createProject';
import createTodo from './createTodo';

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
    const dDate = document.querySelector('.dialog_date').value;
    createTodo(dTitle, dDesc, dPriority, dDate);
    dialog_form.reset();
  });

  //! ABOUT PROJECTS

  const projectList = document.querySelector('.project_list');
  const projectCreator = document.querySelector('.project-creator');

  projectCreator.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
      // код клавиши Enter
      const newProject = document.createElement('li');
      newProject.classList.add('project_list_item');
      newProject.innerHTML = `
                       <input class='project_input' value=${projectCreator.value} placeholder="type name of project" type="text">
                       <button class='edit_project_btn'>edit</button>
                       <button class='delete_project_btn'>delete</button>
           `;
      // newProject.addEventListener('click', (e) => {
      //   checkActiveProject()
      //   // e.target.classList.add('active_project')
      // });
      projectList.appendChild(newProject);
      createProject(projectCreator.value);
      projectCreator.value = '';
      const projectInput = document.querySelector('.project_input');

      projectInput.addEventListener('click', (e) => {
        e.target.blur();
      });

      const editProjectBtn = document.querySelector('.edit_project_btn');

      const deleteProjectBtn = document.querySelectorAll('.delete_project_btn');
      deleteProjectBtn.forEach((i) => {
        i.addEventListener('click', (e) => {
          let cur = e.target.previousElementSibling.previousElementSibling.value;
          localStorage.removeItem(`${cur}`);

          e.target.parentElement.remove();
        });
      });
    }
  });
  checkActiveProject()
}

export default manageDom;
