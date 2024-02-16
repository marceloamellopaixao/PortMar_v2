const themeChangeButton = document.querySelector('.theme-change');
const body = document.querySelectorAll( 'body' )[0];

themeChangeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the current theme preference to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Check the user's theme preference from local storage
const savedDarkMode = localStorage.getItem('dark-mode');

if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
}
