document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById("projectsGrid");

    fetch("projects.json") // Load the JSON file
        .then((response) => response.json())
        .then((projects) => {
            projectsGrid.innerHTML = ""; // Clear loading text

            projects.forEach((project, index) => {
                const projectCard = document.createElement("a");
                projectCard.href = project.github;
                projectCard.target = "_blank";
                projectCard.classList.add("projectCard");

                projectCard.innerHTML = `
                    <h2>${project.name}</h2>
                    <p>${project.description}</p>
                `;

                projectsGrid.appendChild(projectCard);

                // Add a divider except after the last item
                if (index !== projects.length - 1) {
                    const divider = document.createElement("div");
                    divider.classList.add("divider");
                    projectsGrid.appendChild(divider);
                }
            });
        })
        .catch((error) => {
            console.error("Error loading projects:", error);
            projectsGrid.innerHTML = "<p>Failed to load projects.</p>";
        });
});
