import checkActiveProject from './checkActivePr';

function renderProject() {
  const projectList = document.querySelector('.project_list');
  projectList.innerHTML = '';
  if (localStorage.getItem('projectList')) {
    JSON.parse(localStorage.getItem('projectList')).forEach((item) => {
      const newProject = document.createElement('li');
      newProject.classList.add('project_list_item');
      newProject.addEventListener('click', (e) => {
        e.target.blur();
        checkActiveProject(e.target);
      });
      newProject.innerHTML = `
      <span class='project_name'>${item}</span>
      <button class='delete_project_btn'>delete</button>
      `;
      
      //<button class='edit_project_btn'>edit</button>
      // <input class='project_input' value=${item} placeholder="type name of project" type="text">

      projectList.appendChild(newProject);
      const deleteProjectBtn = document.querySelectorAll('.delete_project_btn');
      deleteProjectBtn.forEach((i) => {
        i.addEventListener('click', (e) => {
          let cur = e.target.parentElement.firstElementChild.textContent;
          localStorage.removeItem(`${cur}`);
          let curStateProjects = JSON.parse(localStorage.getItem('projectList'));
          let resultListProject = curStateProjects.filter((i) => {
            return i !== cur;
          });
          localStorage.setItem('projectList', JSON.stringify(resultListProject));
          e.target.parentElement.remove();
          console.log(curStateProjects);
        });
      });
    });
  }
}
export default renderProject;
