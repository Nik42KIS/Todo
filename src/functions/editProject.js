function editProject(item){
// item.parent.firstChild.remove()
const inputValue = item.parent.firstChild.value;
item.parent.innerHTML = `
<input class='project_input'value=${inputValue} placeholder="type name of project" type="text">
<button class='edit_project_btn'>edit</button>
<button class='delete_project_btn'>delete</button>
`
const projectInput = document.querySelector('.project_input')
projectInput.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode;
    if (key === 13) {
      // код клавиши Enter
      createProject(projectCreator.value);
      projectCreator.value = ''
      renderProject()
    }
  })
}

export default editProject