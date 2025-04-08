export { MakeAProject };

// project:
//  - title
//  - description
//  - dueDate
//  - priority colors
//  - List: todo lists

//Project Class
class Project {
  constructor(
    projectTitle,
    projectDescription,
    projectDueDate,
    projectPriority,
    projectTodoArray = [],
    projectNote,
  ) {
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.projectDueDate = projectDueDate;
    this.projectPriority = projectPriority;
    this.projectTodoArray = projectTodoArray;
    this.projectNote = projectNote;
  }
  Methods;
  clickedAddTodo(todo) {
    this.projectTodoArray.push(todo);
  }
  clickedRemoveTodo(index) {
    this.projectTodoArray.remove();
    if (index > -1) {
      this.projectTodoArray.splice(index, 1);
    }
  }
  getTodoIndex(index) {
    return this.projectTodoArray[index];
  }

  getTodoArray() {
    return this.projectTodoArray;
  }
}

function MakeAProject() {
  const project = new Project();

  const makeProject = () => project;

  return {
    makeProject,
  };
}
