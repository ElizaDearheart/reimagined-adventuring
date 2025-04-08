export { MakeATodo };

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
  constructor(title, description, dueDate, priority, checklist = [], note) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.note = note;
  }
  //Methods
  clickedAddChecklistItem(item) {
    this.checklist.push(item);
  }
  clickedRemoveChecklistItem(index) {
    this.checklist.remove();
    if (index > -1) {
      this.checklist.splice(index, 1);
    }
  }
  getChecklistIndex(index) {
    return this.checklist[index];
  }
  getChecklist() {
    return this.checklist;
  }
}

function MakeATodo() {
  const todo = new Todo();

  const makeTodo = () => todo;

  return {
    makeTodo,
  };
}
