import "../CSS/home.css";
import { modalToAddProject } from "./addProject.js";
// import { ModifyMyProjects } from "./myProjects.js";
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

  const newProjectButton = document.createElement("button");
  newProjectButton.id = "newProjectButton";
  newProjectButton.className = "newProjectButton";
  newProjectButton.textContent = "Start New Project";
  projectContainer.appendChild(newProjectButton);

  // create modal div
  const addProjectModal = document.createElement("dialog");
  addProjectModal.className = "addProjectModal";
  addProjectModal.id = "addProjectModal";
  content.appendChild(addProjectModal);

  // open modal
  newProjectButton.onclick = function () {
    addProjectModal.style.display = "grid";
  };

  document
    .getElementById("newProjectButton")
    .addEventListener("click", modalToAddProject());
  // addProject();
}
