document.addEventListener('DOMContentLoaded', () => {
    // Select the menu button and the menu list
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Add a click event listener to the toggle button
    navToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the menu list
        // This is what the CSS file uses to show/hide the menu
        navMenu.classList.toggle('active');
        
        // Optionally, update the button's accessibility attribute
        const isExpanded = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });
});