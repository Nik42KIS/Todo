import render from '../../render';
import store from '../../store';
import Todo from '../Todo';

 function createTodo(title, description, dueDate, priority) {
  const prod =  store().curProject;


  let todo = new Todo(title, description, dueDate, priority)
  prod.push(todo)
  localStorage.setItem('curProject', JSON.stringify(prod))

  render()
}

export default createTodo