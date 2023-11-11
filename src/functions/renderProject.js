import checkActiveProject from './checkActivePr';
import render from './render';

function renderProject() {
  const projectList = document.querySelector('.project_list');

  projectList.innerHTML = '';
  if (localStorage.getItem('projectList')) {
    JSON.parse(localStorage.getItem('projectList')).forEach((item) => {
      const newProject = document.createElement('li');
      newProject.classList.add('project_list_item');
      // const projectName = document.createElement('span')
      // projectName.className = 'project_name'
      // projectName.innerHTML = item;
      // newProject.onclick = (e) => {
      //  let curProject =  checkActiveProject(e.target);
      //  render(curProject)
      // }
      newProject.addEventListener('click', (e) => {
   
       let curProject =  checkActiveProject(e.target);
       render(curProject)}
      );
      newProject.innerHTML = `
       <span class='project_name'>${item}</span>
      <button class='delete_project_btn'>delete</button>
      `
      // list.addEventListener("click", function(event) {
      //   // Проверяем, является ли целевой элемент span или button
      //   var targetElement = event.target;
      
      //   // Проверяем, содержится ли целевой элемент внутри элемента li
      //   while (targetElement && targetElement !== list) {
      //     if (targetElement.tagName === "LI") {
      //       // Удаляем класс 'active' у всех элементов li в списке
      //       list.querySelectorAll("li").forEach(function(li) {
      //         li.classList.remove("active");
      //       });
      
      //       // Добавляем класс 'active' только текущему элементу li
      //       targetElement.classList.add("active");
      //       break;
      //     }
      
      //     // Переходим к родительскому элементу для проверки следующего уровня
      //     targetElement = targetElement.parentNode;
      //   }
      // });
      // Этот код добавляет обработчик события клика к родительскому элементу ul (вместо каждого li). При клике на любой элемент внутри ul, код проверяет, является ли целевой элемент li или находится ли целевой элемент внутри li. Если это так, то он добавляет/удаляет класс active соответствующим образом.
      
      
      
      
      
      
      // newProject.prepend(projectName)
      
      // projectName.addEventListener('click', (e) => {
      //   e.stopPropagation()
      //   let curProject =  checkActiveProject(e.target);
      //   render(curProject)
      // }
      // )
      ;
    

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
