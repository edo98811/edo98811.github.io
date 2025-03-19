function includeHTML(file, elementId) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading file:', error));
}

// Load the navbar and footer
document.addEventListener("DOMContentLoaded", function() {
  includeHTML("navbar.html", "navbar-container");
  includeHTML("footer.html", "footer-container");
});
