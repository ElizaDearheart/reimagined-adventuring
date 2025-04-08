export { ModifyMyProjects };

// myProjects:
// - List: projects

class MyProjects {
  constructor(projects = []) {
    this.projects = projects;
  }
  //Methods
  clickedAddProject(project) {
    this.projects.push(project);
  }
  clickedRemoveProject(index) {
    this.projects.remove();
    if (index > -1) {
      this.projects.splics(index, 1);
    }
  }
  getProjectIndex(index) {
    return this.projects[index];
  }
  getProjectsArray() {
    return this.projects;
  }
}

function ModifyMyProjects() {
  const myProjects = new MyProjects();

  const getMyProjects = () => myProjects;

  return {
    getMyProjects,
  };
}
