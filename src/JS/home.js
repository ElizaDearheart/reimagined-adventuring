import "../CSS/home.css";
import { Project } from "./project.js";
import { addTodo } from "./createTodo.js";
export { projectHome };

// DOM manipulation of:
//  - projects
//  - checklists
//  - notes

// Main function
function projectHome() {
  let content = document.getElementById("content");
  let projectContainer = document.createElement("div");
  projectContainer.className = "projectContainer";
  projectContainer.id = "projectContainer";
  content.appendChild(projectContainer);

  // let project = Project();

  const addProjectButton = document.createElement("button");
  addProjectButton.id = "addProjectButton";
  addProjectButton.className = "addProjectButton";
  addProjectButton.textContent = "Add Project";
  projectContainer.appendChild(addProjectButton);

  document
    .getElementById("addProjectButton")
    .addEventListener("click", createProjectDiv);

  createProjectDiv();
}

// Creating Project Divs
const createProjectDiv = () => {
  let projectContainer = document.getElementById("projectContainer");
  let project = Project();

  let todoArray = project.getProject();

  const projectDiv = document.createElement("div");
  projectDiv.id = "projectDiv";
  projectDiv.className = "projectDiv";
  projectDiv.textContent = "I am a project";
  projectContainer.appendChild(projectDiv);

  addTodo();

  const addTodoButton = document.createElement("button");
  addTodoButton.id = "addTodoButton";
  addTodoButton.className = "addTodoButton";
  addTodoButton.textContent = "+todo";
  projectDiv.appendChild(addTodoButton);

  document
    .getElementById("addTodoButton")
    .addEventListener(
      "click",
      addTodo,
      project.addTodoToArray(),
      console.log(todoArray),
    );

  return createProjectDiv;
};
