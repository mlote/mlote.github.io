document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the DOM
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentYearSpan = document.getElementById('current-year');

    // Set the current year in the footer
    currentYearSpan.textContent = new Date().getFullYear();

    // Check for user's preferred color scheme and set initial theme
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        body.classList.add('dark-mode');
        updateToggleIcon(true);
    } else {
        updateToggleIcon(false);
    }
    
    // Function to update the SVG icon
    function updateToggleIcon(isDarkMode) {
        const sunIcon = document.querySelector('.sun');
        const moonIcon = document.querySelector('.moon');
        if (isDarkMode) {
            sunIcon.style.position = 'absolute';
            sunIcon.style.left = '-9999px';
            moonIcon.style.position = 'static';
            moonIcon.style.left = 'auto';
        } else {
            sunIcon.style.position = 'static';
            sunIcon.style.left = 'auto';
            moonIcon.style.position = 'absolute';
            moonIcon.style.left = '-9999px';
        }
    }

    // Event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        updateToggleIcon(isDarkMode);
    });
});
