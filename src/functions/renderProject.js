import checkActiveProject from './checkActivePr';
import renderTodo from './renderTodo';

function renderProject() {
  const projectList = document.querySelector('.project_list');

  projectList.innerHTML = '';
  
  const storedProjects = JSON.parse(localStorage.getItem('projectList')) || [];

  storedProjects.forEach((item) => {
    const newProject = document.createElement('li');
    newProject.classList.add('project_list_item');

    newProject.addEventListener('click', (e) => {
      const curProject = checkActiveProject(e.target);
      renderTodo(curProject);
    });

    const projectContent = document.createElement('div');
    projectContent.classList.add('project_content');
    projectContent.textContent = item;

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete_project_btn');
    deleteProjectBtn.textContent = 'delete';

    deleteProjectBtn.addEventListener('click', (e) => {
      const cur = e.target.parentElement.firstElementChild.textContent;
      localStorage.removeItem(cur);
      const curStateProjects = storedProjects.filter((i) => i !== cur);
      localStorage.setItem('projectList', JSON.stringify(curStateProjects));
      e.target.parentElement.remove();
    });

    newProject.appendChild(projectContent);
    newProject.appendChild(deleteProjectBtn);
    projectList.appendChild(newProject);
  });
}

export default renderProject;
