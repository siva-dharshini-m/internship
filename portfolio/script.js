// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation highlight on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for the subtitle
const text = "Electronics and Communication Engineering (ECE) Student | IoT Enthusiast | Tech Explorer";
let index = 0;
const typingSpeed = 50;

function typeText() {
    const typedTextElement = document.querySelector('.typed-text');
    if (index < text.length) {
        typedTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing effect when the page loads
window.addEventListener('load', () => {
    const typedTextElement = document.querySelector('.typed-text');
    typedTextElement.textContent = '';
    typeText();
});
