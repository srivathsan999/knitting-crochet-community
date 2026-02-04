// Main Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Close on Click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarSupportedContent');
    const bsCollapse = typeof bootstrap !== 'undefined' ? new bootstrap.Collapse(menuToggle, { toggle: false }) : null;

    navLinks.forEach((l) => {
        l.addEventListener('click', (e) => {
            // Only auto-close if it's not a dropdown toggle
            if (!l.classList.contains('dropdown-toggle')) {
                if (menuToggle.classList.contains('show') && bsCollapse) {
                    bsCollapse.toggle();
                }
            }
        });
    });
});
