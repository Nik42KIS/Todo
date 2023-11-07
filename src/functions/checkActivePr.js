
function checkActiveProject(){
    const projectListActive = document.querySelectorAll('.project_list_item');
    projectListActive.forEach((item)=>{
  
            item === e.target ? e.target.classList.add('active') :  e.target.classList.remove('active')

    })
    // projectListActive.addEventListener('click', (e)=>{
    //     projectListActive.forEach((item)=>{
    //         item === e.target ? e.target.classList.add('active') : false
    //      })
    //  }
    //  )
     console.log(777)
}

export default checkActiveProject