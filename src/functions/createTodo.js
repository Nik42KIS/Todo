import render from './render';
import Todo from '../Todo';

function createTodo(title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);
  let prevState ;
  let projectArray = [];

  const activeProject = document.getElementsByClassName('active_project')[0].firstElementChild.textContent;
  console.log('active', activeProject)
 if(localStorage.getItem(activeProject)){

   prevState = localStorage.getItem(activeProject)
   projectArray = JSON.parse(prevState)
 }
  

  projectArray.push(todo);

  localStorage.setItem(activeProject, JSON.stringify(projectArray));

 render();
}


export default createTodo