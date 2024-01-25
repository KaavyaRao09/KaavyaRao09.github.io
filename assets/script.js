function showProjects(language) {
    // Hide all projects content
    var allProjects = document.querySelectorAll('.projects-content');
    allProjects.forEach(function(project) {
        project.style.display = 'none';
    });

    // Show the selected projects content
    var selectedProjects = document.querySelector('.' + language);
    selectedProjects.style.display = 'block';
}