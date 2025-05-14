// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileButton = document.createElement('button');
    mobileButton.classList.add('mobile-menu-button');
    mobileButton.innerHTML = '☰';
    mobileButton.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Add button to nav
    nav.insertBefore(mobileButton, navLinks);
    
    // Toggle menu on click
    mobileButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        mobileButton.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
    });
};

// Initialize mobile navigation on small screens
if (window.innerWidth <= 768) {
    createMobileNav();
}

// Add animation to cards on scroll
const animateCards = () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => observer.observe(card));
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateCards();
});

// Handle CTA button click
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const basicsSection = document.querySelector('#basics');
        basicsSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Add active state to navigation links
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink); 