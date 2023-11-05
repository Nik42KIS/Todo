import render from '../../render';
import Todo from '../Todo';

function createTodo(title, description, dueDate, priority) {
  const todo = new Todo(title, description, dueDate, priority);
  let prevState ;
  let projectArray = [];

 if(localStorage.getItem('curProject')){

   prevState = localStorage.getItem('curProject') ? localStorage.getItem('curProject') : ''
   projectArray = JSON.parse(prevState)
 }
  

  projectArray.push(todo);

  localStorage.setItem('curProject', JSON.stringify(projectArray));

 render();
}


export default createTodo