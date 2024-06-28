// Example: Display a welcome message with the current time
function displayWelcomeMessage() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    const message = `${greeting} Welcome to my website.`;
    alert(message);
}

// Example: Toggle visibility of a section
function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Example: Smooth scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Call functions or add event listeners as needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Display welcome message on page load
    displayWelcomeMessage();

    // Example: Smooth scroll to top when clicking a button
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", function() {
            scrollToTop();
        });
    }
});

