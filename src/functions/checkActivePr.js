function checkActiveProject(char) {
  const projectListActive = document.querySelectorAll('.project_list_item');
  projectListActive.forEach((item) => {
    item == char || item == char.parentElement
    ? item.classList.add('active_project') 
    : item.classList.remove('active_project');
  });
  const activeProject =
    document.getElementsByClassName('active_project')[0].firstElementChild.textContent;
 return activeProject
}

export default checkActiveProject;
