import Todo from '../Todo';

function getTodo(item) {
  localStorage.getItem(item);
}

export default getTodo;
