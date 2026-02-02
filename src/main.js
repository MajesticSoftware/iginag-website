// Simple site functionality - no animated background

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Navigation scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile menu toggle
window.toggleMenu = function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
};

// Form submission handler
window.handleSubmit = function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Create mailto link
  const subject = encodeURIComponent(data.subject || 'Website Inquiry');
  const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
  window.location.href = `mailto:records@iginagentertainment.com?subject=${subject}&body=${body}`;
  
  // Show success message
  alert('Opening your email client to send the message!');
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});

console.log('Iginag Entertainment - The End Is Just the Beginning');
