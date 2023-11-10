
function checkActiveProject(char){
    const projectListActive = document.querySelectorAll('.project_list_item');
    projectListActive.forEach((item)=>{
  
            item == char 
            ? item.classList.add('active_project')
            : item.classList.remove('active_project')
            item == char 
            
    })
    // projectListActive.addEventListener('click', (e)=>{
    //     projectListActive.forEach((item)=>{
    //         item === e.target ? e.target.classList.add('active') : false
    //      })
    //  }
    //  )
}

export default checkActiveProject