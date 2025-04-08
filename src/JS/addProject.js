// import { MakeATodo } from "./todos.js";
import "../CSS/addProject.css";

import { ModifyMyProjects } from "./myProjects.js";

import { MakeAProject } from "./projects.js";
import { createFormElement } from "./shared.js";
// import { addTodo } from "./addTodo.js";
import { MakeATodo } from "./todos.js";
export { addProject, modalToAddProject };

// Create A New Project
function addProject() {
  // Get MyProjects
  let myProjects = ModifyMyProjects();
  let getMyProjects = myProjects.getMyProjects();

  // create Project
  let project = MakeAProject();
  let newProject = project.makeProject();

  getMyProjects.clickedAddProject(newProject);

  let myProjectsArray = getMyProjects.getProjectsArray();
  console.log(myProjectsArray);

  // create Todo
  /////////////////////////
  let todo = MakeATodo();
  let makeNewTodo = todo.makeTodo();
  ////////////////////////////
  // Add todo to initial project
  newProject.clickedAddTodo(makeNewTodo);
  //Todo Array
  let getTodoArray = newProject.getTodoArray();
  console.log(getTodoArray);
}

//clear modal functions
function clearAllInputs() {
  const textInputs = document.querySelectorAll('input[type="text"]');
  const numberInputs = document.querySelectorAll('input[type="number"]');

  textInputs.forEach((singleInput) => (singleInput.value = ""));
  numberInputs.forEach((singleInput) => (singleInput.value = ""));
}

//MODAL
function modalToAddProject() {
  let addProjectModal = document.getElementById("addProjectModal");

  //// create project form
  let projectForm = document.createElement("form");
  projectForm.method = "dialog";
  projectForm.id = "projectForm";
  projectForm.className = "projectForm";
  // projectDiv.appendChild(projectForm);
  addProjectModal.appendChild(projectForm);

  // create Close Modal button
  const closeProjectModalButton = document.createElement("button");
  closeProjectModalButton.className = "closeProjectModal";
  closeProjectModalButton.id = "closeProjectModal";
  closeProjectModalButton.textContent = "X";

  //close modal
  closeProjectModalButton.onclick = function () {
    addProjectModal.style.display = "none";
    clearAllInputs();
  };

  // addProjectModal.appendChild(addProjectButton);
  addProjectModal.appendChild(closeProjectModalButton);

  ////create form inputs - submit button
  const projectSubmitButton = createFormElement("input", {
    type: "submit",
    value: "Add Project",
  });

  ////create form inputs - title

  const projectTitleInput = createFormElement("input", {
    type: "text",
    name: "projectTitle",
    id: "projectTitle",
    placeholder: "Project title",
  });
  let projectTitleLabel = document.createElement("label");
  projectTitleLabel.textContent = "Title:";

  ////create form inputs - description

  const projectDescriptionInput = createFormElement("input", {
    type: "text",
    name: "ProjectDescription",
    id: "projectDescription",
    placeholder: "What is your project about?",
  });
  let projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.textContent = "Description:";

  ////create form inputs - dueDate

  const projectDueDateInput = createFormElement("input", {
    type: "text",
    name: "projectDueDate",
    id: "projectDueDate",
    placeholder: "When is this project due by?",
  });
  let projectDueDateLabel = document.createElement("label");
  projectDueDateLabel.textContent = "Due date:";

  //// create form inputs - note

  const projectNoteInput = createFormElement("input", {
    type: "text",
    name: "projectNote",
    id: "projectNote",
    placeholder: "Add a note for this project",
  });

  let projectNoteLabel = document.createElement("label");
  projectNoteLabel.textContent = "Note:";

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
  addProjectModal.appendChild(projectForm);
  ///////////////////////////
  ////add form elements to todoForm
  projectForm.appendChild(projectTitleLabel);
  projectForm.appendChild(projectTitleInput);
  projectForm.appendChild(projectDescriptionLabel);
  projectForm.appendChild(projectDescriptionInput);
  projectForm.appendChild(projectDueDateLabel);
  projectForm.appendChild(projectDueDateInput);
  projectForm.appendChild(radioGroup);
  projectForm.appendChild(projectNoteLabel);
  projectForm.appendChild(projectNoteInput);
  projectForm.appendChild(projectSubmitButton);

  // document
  //   .getElementById("addTodoButton")
  //   .addEventListener("click", addTodo);
}

// Submit Modal to Create Project

function submitProjectModal() {
  document
    .getElementById("projectForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newProjectTitle =
        document.getElementById("projectTitleInput").value;
      const newProjectDescription = document.getElementById(
        "projectDescriptionInput",
      ).value;
      const newProjectDueDate = document.getElementById(
        "projectDueDateInput",
      ).value;
      const newProjectNote = document.getElementById("projectNoteInput").value;

      addProject();

      // Creating Project Divs
      function createProjectDiv() {
        let projectContainer = document.getElementById("projectContainer");
        // let project = MakeAProject();
        // let todoArray = project.getTodoArray();

        const projectDiv = document.createElement("div");
        projectDiv.id = "projectDiv";
        projectDiv.className = "projectDiv";
        projectContainer.appendChild(projectDiv);

        //project title
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = newProjectTitle;
        //project description
        const projectDescription = document.createElement("p");
        projectDescription.textContent = newProjectDescription;
        //project due date
        const projectDueDate = document.createElement("p");
        projectDueDate.textContent = newProjectDueDate;
        //project note
        const projectNote = document.createElement("p");
        projectNote.textContent = newProjectNote;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectDueDate);
        projectDiv.appendChild(projectNote);

        const addTodoButton = document.createElement("button");
        addTodoButton.id = "addTodoButton";
        addTodoButton.className = "addTodoButton";
        addTodoButton.textContent = "+todo";
        projectDiv.appendChild(addTodoButton);
      }
      createProjectDiv();
      clearAllInputs();
    });
}
submitProjectModal;
