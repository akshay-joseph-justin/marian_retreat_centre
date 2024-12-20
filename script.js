
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Change navbar color when toggle button is clicked in mobile view
const navbarToggler = document.getElementById('navbar-toggler');
const navbar = document.getElementById('navbar');

navbarToggler.addEventListener('click', function() {
    navbar.classList.toggle('toggled'); // Toggle the 'toggled' class on click
});
