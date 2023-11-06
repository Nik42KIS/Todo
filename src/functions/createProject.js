import render from './render';
import Todo from '../Todo';

function createProject(title) {
  let prevState ;
  let projectArray = [];

 if(localStorage.getItem(`${title}`)){

   prevState = localStorage.getItem(`${title}`) ? localStorage.getItem(`${title}`) : ''
   projectArray = JSON.parse(prevState)
 }
  

  projectArray.push(title);

  localStorage.setItem(`${title}`, JSON.stringify(projectArray));

//  render();
}


export default createProject