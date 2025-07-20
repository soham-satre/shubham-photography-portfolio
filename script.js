// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Gallery display functionality (non-clickable)
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        // Remove any click functionality - just display images
        item.style.cursor = 'default';
    });
}

// Contact form handling
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    if (form) {
        // Only add validation, don't prevent form submission to Formspree
        form.addEventListener('submit', (e) => {
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simple validation for required fields
            if (!data.name || !data.email) {
                e.preventDefault(); // Only prevent if validation fails
                alert('Please fill in all required fields.');
                return;
            }
            
            // If validation passes, let the form submit to Formspree normally
            // No e.preventDefault() here - form will submit to Formspree
        });
    }
    
    // Check for success parameter in URL and show success message
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showSuccessMessage();
        // Clean URL by removing the success parameter
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Show success message
function showSuccessMessage() {
    const form = document.querySelector('.contact-form');
    if (form) {
        const successDiv = document.createElement('div');
        successDiv.innerHTML = `
            <div style="background: #d4edda; color: #155724; padding: 1rem; border-radius: 5px; margin-bottom: 1rem; border: 1px solid #c3e6cb;">
                <strong>✓ Message Sent Successfully!</strong><br>
                Thank you for your inquiry. I'll get back to you within 24 hours.
            </div>
        `;
        form.insertBefore(successDiv, form.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe elements with animation class
    document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initContactForm();
    animateOnScroll();
});

// Image lazy loading (for when real images are added)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading
lazyLoadImages();
