export { Project };

// projects:
//  - title
//  - description
//  - List: todo lists
//  - priority colors

// todo lists:
//  - title
//  - description
//  - dueDate
//  - priority
//  - checklist
//  - notes
//  - priority colors
//////////////////////////////////

//Todo Class
class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    checklistItem,
    checklist,
    note,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklistItem = checklistItem;
    this.checklist = Array(checklistItem);
    this.note = note;
  }
  //Method
  clickedAddChecklistItem() {
    this.checklist.append(this.checklistItem);
  }
  clickedRemoveChecklistItem(index) {
    this.checklist.remove();
    if (index > -1) {
      this.checklist.splice(index, 1);
    }
  }
}

function Project() {
  const todoArray = [];
  const todo = new Todo();
  const todoIndex = todoArray.indexOf(todo);

  const makeTodo = () => todo;

  const checklistGroup = () => todo.checklist;

  const getProject = () => todoArray;

  const addTodoToArray = () => {
    todoArray.push(todo);
  };

  const addChecklistItem = (item) => todo.clickedAddChecklistItem(item);

  const removeChecklistItem = (index) => todo.clickedRemoveChecklistItem(index);

  const removeTodo = () => {
    todoArray.remove();
    if (todoIndex > -1) {
      todoArray.splice(todoIndex, 1);
    }
  };
  return {
    makeTodo,
    checklistGroup,
    getProject,
    addTodoToArray,
    addChecklistItem,
    removeChecklistItem,
    removeTodo,
  };
}
