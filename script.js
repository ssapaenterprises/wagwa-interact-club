// Basic JavaScript for the interface
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wagwa Interact Club System Loaded');
    
    // Simple navigation active state
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
