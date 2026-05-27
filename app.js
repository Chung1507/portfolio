const projectDetails = {
travel: {
title: "Travelgroupsystem Architecture",
desc: "Backend Details:<br>• Framework: Java Spring Boot<br>• Database: MySQL/PostgreSQL relational design<br>• Features: Implemented REST APIs for group dynamic creation, relational database schema optimization to prevent data duplication, and transaction management to secure booking updates."
},
study: {
title: "Studyhub Backbone Architecture",
desc: "Backend Details:<br>• Framework: Java Spring Boot with Spring Security<br>• Database: Highly indexed SQL database<br>• Features: Built robust role-based access control (RBAC) for Teachers and Students, optimized query execution times for course logs, and constructed structured JSON API responses."
}
};

function openModal(projectKey) {
const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDescription");

title.innerText = projectDetails[projectKey].title;
desc.innerHTML = projectDetails[projectKey].desc;

modal.style.display = "block";
}

function closeModal() {
document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
const modal = document.getElementById("projectModal");
if (event.target == modal) {
modal.style.display = "none";
}
}