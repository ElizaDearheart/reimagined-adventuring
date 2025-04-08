import { MakeATodo } from "./todos.js";
// import { MakeAProject } from "./projects.js";
import { createFormElement } from "./shared.js";
export { addTodo };

function addTodo() {
  let todo = MakeATodo();
  let newTodo = todo.makeTodo();

  let projectDiv = document.getElementById("projectDiv");

  //// create todo form
  let todoForm = document.createElement("form");
  todoForm.id = "todoForm";
  todoForm.className = "todoForm";
  projectDiv.appendChild(todoForm);

  ////create form inputs - title

  const titleInput = createFormElement("input", {
    type: "text",
    name: "title",
    id: "title",
    placeholder: "Todo title",
  });
  let titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";

  ////create form inputs - description

  const descriptionInput = createFormElement("input", {
    type: "text",
    name: "description",
    id: "description",
    placeholder: "What is your todo about?",
  });
  let descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";

  ////create form inputs - dueDate

  const dueDateInput = createFormElement("input", {
    type: "text",
    name: "dueDate",
    id: "dueDate",
    placeholder: "When is this todo due by?",
  });
  let dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due date:";

  //// create form inputs - note

  const noteInput = createFormElement("input", {
    type: "text",
    name: "note",
    id: "note",
    placeholder: "Add a note for this todo",
  });

  let noteLabel = document.createElement("label");
  noteLabel.textContent = "Note:";

  ////create form inputs - priority

  function createPriorityRadioButtons(radioOptions, priorityGroup) {
    const radioContainer = document.createElement("div");
    radioContainer.className = "radioContainer";

    radioOptions.forEach((option) => {
      const priority = document.createElement("input");
      priority.type = "radio";
      priority.name = priorityGroup;
      priority.value = option.value;
      priority.id = option.id;

      const label = document.createElement("label");
      label.htmlFor = option.id;
      label.textContent = option.label;

      radioContainer.appendChild(priority);
      radioContainer.appendChild(label);
      radioContainer.appendChild(document.createElement("br"));
    });
    return radioContainer;
  }

  const radioOptions = [
    { value: "High", id: "radioOption1", label: "High Priority" },
    { value: "Medium", id: "radioOption2", label: "Moderate Priority" },
    { value: "Low", id: "radioOption3", label: "Low priority" },
  ];

  const radioGroup = createPriorityRadioButtons(radioOptions, "priorityGroup");

  ///////////////////////////
  ////add form elements to todoForm
  todoForm.appendChild(titleLabel);
  todoForm.appendChild(titleInput);
  todoForm.appendChild(descriptionLabel);
  todoForm.appendChild(descriptionInput);
  todoForm.appendChild(dueDateLabel);
  todoForm.appendChild(dueDateInput);
  todoForm.appendChild(radioGroup);
  todoForm.appendChild(noteLabel);
  todoForm.appendChild(noteInput);

  ////create form inputs - check list
  ////add to todoForm

  function createChecklist(checklistItems) {
    const checklistContainer = document.createElement("div");
    checklistContainer.className = "checklistContainer";
    todoForm.appendChild(checklistContainer);

    for (const item of checklistItems) {
      const checklistItem = document.createElement("input");
      checklistItem.type = "checkbox";
      checklistItem.name = "checklistItems";
      checklistItem.value = item.value;
      checklistItem.id = item.id;

      const label = document.createElement("label");
      label.htmlFor = item.value;
      label.textContent = item.label;

      checklistContainer.appendChild(checklistItem);
      checklistContainer.appendChild(label);
      checklistContainer.appendChild(document.createElement("br"));
    }
    return checklistContainer;
  }

  const checklistItems = [
    //TODO: delete hardcoded values
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]; //TODO: replace with `todo.checklistGroup`;
  // checklistOptions.forEach((option) => {
  //   // TODO: add logic to add options from use input, with value and label
  // });
  // console.log(checklistOptions);

  createChecklist(checklistItems);

  // let todoDiv = document.createElement("div");
  // todoDiv.className = "todoDiv";
  // projectDiv.appendChild(todoDiv);

  const titleEntered = () => {
    document.getElementById("title").value;
  };
  const descriptionEntered = () => {
    document.getElementById("description").value;
  };

  const dueDateEntered = () => {
    document.getElementById("dueDate").value;
  };

  const prioritySelected = () => {
    document.querySelector('input[name="priorityGroup"]:checked').value;
  };

  const noteEntered = () => {
    document.getElementById("note").value;
  };
  return {
    addTodo,
    titleEntered,
    descriptionEntered,
    dueDateEntered,
    prioritySelected,
    noteEntered,
  };
}

//Todo:
//- add date package and update dueDate
