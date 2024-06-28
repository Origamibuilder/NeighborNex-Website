document.addEventListener('DOMContentLoaded', () => {
    const loadResourcesButton = document.getElementById('loadResources');
    const resourceList = document.getElementById('resourceList');

    loadResourcesButton.addEventListener('click', () => {
        resourceList.innerHTML = `
            <ul>
                <li><a href="#">Resource 1</a></li>
                <li><a href="#">Resource 2</a></li>
                <li><a href="#">Resource 3</a></li>
            </ul>
        `;
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
