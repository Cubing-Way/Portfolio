const projectSelector = document.getElementById("projects");
const projects = document.querySelectorAll(".project");

function showProject(projectId) {

    projects.forEach(function (project) {

        if (project.id === projectId) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }

    });

    // Keep the dropdown synchronized
    projectSelector.value = projectId;
}


// Check whether a project was selected from another page
const projectFromLink = window.location.hash.substring(1);

if (projectFromLink && document.getElementById(projectFromLink)) {

    showProject(projectFromLink);

} else {

    // No project in the URL, so use the dropdown
    showProject(projectSelector.value);

}


// Handle dropdown changes
projectSelector.addEventListener("change", function () {

    showProject(projectSelector.value);

    // Update the URL
    window.history.replaceState(
        null,
        "",
        "#" + projectSelector.value
    );

});
