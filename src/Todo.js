

class Todo{
    
constructor(title, description, dueDate, priority){
    this.title = title; 
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}


editTitle(value){
    this.title = value;
}
editPriority(value){
    this.priority = value;
}
editDescription(value){
    this.description = value;
}
editDate(value){
    this.dueDate = value;
}

}

export default Todo