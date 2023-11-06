import createProject from './createProject';
import createTodo from './createTodo';
// createTodo(2,22,77777,2222)

function manageDom() {
  const dialog = document.getElementById('dialog');
  const dialogAddTodo = document.querySelector('.dialog_btn_create');
  const btnOpenDialog = document.querySelector('.add_todo');
  

  btnOpenDialog.onclick = () => {
    console.log(`dialog: ${dialog}`);
    dialog.showModal();
  };

  dialogAddTodo.addEventListener('click', (e) => {
    const dTitle = document.querySelector('.dialog_title').value;
    const dDesc = document.querySelector('.dialog_description').value;
    const dPriority = document.querySelector('.dialog_priority').value;
    const dDate = document.querySelector('.dialog_date').value;
    createTodo(dTitle, dDesc, dPriority, dDate);
    dialog_form.reset();
  });
  
  const projectList = document.querySelector('.project_list');
  const projectCreator = document.querySelector('.project-creator');

  projectCreator.addEventListener('keypress',(e)=>{
    let key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        const newProject = document.createElement('li');
             newProject.classList.add('project_list_item');
             newProject.innerHTML =  `
                       <input placeholder="type name of project" type="text">
           `
             projectList.appendChild(newProject)
        projectCreator.blur()
    }
 } )

  //   const btnCreateProject = document.querySelector('.project_btn_create');
  
//   btnCreateProject.addEventListener('click', () =>{
//     const newProject = document.createElement('li');
//     newProject.classList.add('project_list_item');
//     newProject.innerHTML =  `
//               <input placeholder="type name of project" type="text">
//   `
//     projectList.appendChild(newProject)
//     console.log('hello')
//   })



}

export default manageDom;
