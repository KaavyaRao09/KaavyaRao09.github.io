function showProjects(language) {
    var allProjects = document.querySelectorAll('.projects-content');
    allProjects.forEach(function(project) {
        project.style.display = 'none';
    });

    var selectedProjects = document.querySelector('.' + language);
    selectedProjects.style.display = 'block';
    selectedProjects.classList.add('fade-in');
}


