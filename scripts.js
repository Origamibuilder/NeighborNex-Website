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
    const greetingElement = document.getElementById("greetingMessage");
    if (greetingElement) {
        greetingElement.textContent = message;
    }
}

// Example: Toggle visibility of a section
function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    } else {
        console.error(`Element with id "${sectionId}" not found.`);
    }
}

// Example: Smooth scroll to top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Only display the welcome message on the home page
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        displayWelcomeMessage();
    }

    // Example: Smooth scroll to top when clicking a button
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", function() {
            scrollToTop();
        });
    }
});

