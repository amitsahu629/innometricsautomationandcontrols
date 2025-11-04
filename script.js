// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// File Upload Display
document.querySelector('.file-upload-btn').addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf,.doc,.docx';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            document.getElementById('file-name').textContent = this.files[0].name;
        }
    });
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
});

// Form Submission
document.getElementById('career-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application! We will get back to you soon.');
    this.reset();
    document.getElementById('file-name').textContent = 'No file chosen';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('nav-menu').classList.remove('active');
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'white';
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .industry-item, .mission, .values');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .industry-item, .mission, .values');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
window.addEventListener('load', animateOnScroll);