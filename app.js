const projectDetails = {
    travel: {
        title: "Travelgroupsystem Architecture",
        desc: "<h4>Key Architecture & Responsibilities:</h4>" +
            "• Designed and optimized relational database schemas (MySQL) with over 15 tables, ensuring data integrity and strict 3NF normalization.<br>" +
            "• Built secure RESTful APIs using <b>Java Spring Boot</b> to manage group configurations, real-time member coordination, and dynamic travel itineraries.<br>" +
            "• Utilized <b>Spring Data JPA</b> and Hibernate for efficient object-relational mapping, custom JPQL queries, and database transaction handling."
    },
    study: {
        title: "Studyhub Backbone Architecture",
        desc: "<h4>Key Architecture & Responsibilities:</h4>" +
            "• Implemented robust authentication and authorization mechanisms using <b>Spring Security</b> and JWT (JSON Web Tokens) for role-based access control (Admin, Teacher, Student).<br>" +
            "• Optimized complex SQL query performance and database indexing, reducing API response times by 30% for high-frequency endpoints.<br>" +
            "• Designed clear and comprehensive API documentation and handled global exception mapping to ensure system stability."
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