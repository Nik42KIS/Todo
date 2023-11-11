import render from './render';
import Todo from '../Todo';

function createProject(title) {
  let prevState;
  let projectList = [];

  if (localStorage.getItem('projectList')) {
    prevState = localStorage.getItem('projectList');
    projectList = JSON.parse(prevState);
  }

  projectList.push(title);

  localStorage.setItem(`${title}`, JSON.stringify([]));
  localStorage.setItem('projectList', JSON.stringify(projectList));

  //  render();
}

export default createProject;
