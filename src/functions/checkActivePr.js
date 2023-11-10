
function checkActiveProject(char){
    const projectListActive = document.querySelectorAll('.project_list_item');
    projectListActive.forEach((item)=>{
  
            item == char 
            ? item.classList.add('active_project')
            : item.classList.remove('active_project')
            
    })
}

export default checkActiveProject