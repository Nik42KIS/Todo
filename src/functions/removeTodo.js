import Todo from '../Todo';

function removeTodo(item) {
  localStorage.removeItem(item);
}

export default removeTodo;
