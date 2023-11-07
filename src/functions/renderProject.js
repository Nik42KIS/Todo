import checkActiveProject from "./checkActivePr";


function renderProject(){
    const projectList = document.querySelector('.project_list');
    if(localStorage.getItem('projectList')){
    JSON.parse(localStorage.getItem('projectList')).forEach((item) =>{
        const newProject = document.createElement('li');
        newProject.classList.add('project_list_item');
        newProject.innerHTML = `
                            <input class='project_input' value=${item} placeholder="type name of project" type="text">
                          <button class='edit_project_btn'>edit</button>
                          <button class='delete_project_btn'>delete</button>
        `
        // newProject.addEventListener('click', (e) => {
        //     checkActiveProject()
        //     // e.target.classList.add('active_project')
        //   });
        projectList.appendChild(newProject);
        const deleteProjectBtn = document.querySelectorAll('.delete_project_btn');
        deleteProjectBtn.forEach((i)=>{
          i.addEventListener('click', (e) => {
          let cur = e.target.previousElementSibling.previousElementSibling.value;
          localStorage.removeItem(`${cur}`);
          let curStateProjects = JSON.parse(localStorage.getItem('projectList'))
           let resultListProject =  curStateProjects.filter((i)=>{
               return i!==cur
            })
          localStorage.setItem('projectList', JSON.stringify(resultListProject))
          e.target.parentElement.remove()
          console.log(curStateProjects);
          
        })
        })
    }
    )}

    checkActiveProject()
   

                // const newProject = document.createElement('li');
        // newProject.classList.add('project_list_item');
        // newProject.innerHTML = `
        //                  <input class='project_input' value=${projectCreator.value} placeholder="type name of project" type="text">
        //                  <button class='edit_project_btn'>edit</button>
        //                  <button class='delete_project_btn'>delete</button>
        //      `;
  
        // projectList.appendChild(newProject);
        // createProject(projectCreator.value);
        // projectCreator.value = '';
        // projectCreator.blur();
        // const projectInput = document.querySelector('.project_input');
        // projectInput.addEventListener('click', (e)=>{
        //   e.target.blur()
        // })
        // const deleteProjectBtn = document.querySelectorAll('.delete_project_btn');
        // const editProjectBtn = document.querySelector('.edit_project_btn');
        // deleteProjectBtn.forEach((i)=>{
        //   i.addEventListener('click', (e) => {
        //   console.log(e.target.previousElementSibling.previousElementSibling.value);
        //   let cur = e.target.previousElementSibling.previousElementSibling.value;
        //   localStorage.removeItem(`${cur}`);
        //   console.log('parent:',e.target.parentElement)
        //   e.target.parentElement.remove()
        // })
        // })
}
export default renderProject