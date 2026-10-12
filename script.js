document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle reservation form submission
    const resForm = document.getElementById('resForm');
    if (resForm) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your table reservation request at Shams G90 has been received.');
            resForm.reset();
        });
    }
});
