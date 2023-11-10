
function checkActiveProject(char){
    const projectListActive = document.querySelectorAll('.project_list_item');
    projectListActive.forEach((item)=>{
  
            item == char 
            ? char.classList.add('active_project') 
            : char.classList.remove('active_project')
        //     item == char 
        //     ? console.log('add active')
        //     : console.log('delete active');
            

    })
    // projectListActive.addEventListener('click', (e)=>{
    //     projectListActive.forEach((item)=>{
    //         item === e.target ? e.target.classList.add('active') : false
    //      })
    //  }
    //  )
}

export default checkActiveProject