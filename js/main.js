import Project from "./modules/projects_objects.js";

(() => {
  console.log("fired!");
  let project_wrapper = document.querySelector(".project-wrapper");
  let showAll = document.querySelector(".showAll");

  for (let pro in Project) {
    console.log(pro);

    let project = document.createElement("div");

    //add className for project
    project.className = "project";

    project.innerHTML = `<img src="images/projects/${pro}.jpg" alt="${pro}" />`;
    project.innerHTML += `<p>${Project[pro].p}</p>`;
    project_wrapper.appendChild(project);
  }

  //show more function
  let projects_children = project_wrapper.children;
  let projects_childNodes = project_wrapper.childNodes;

  for (let i = 4; i <= projects_children.length; i++) {
    projects_childNodes[i].className += " show-hide";
    function showProjects() {
      projects_childNodes[i].classList.toggle("show-hide");
    }
    showAll.addEventListener("click", showProjects);
  }
})();
