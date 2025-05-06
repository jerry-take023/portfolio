// Smooth scrolling for anchor links document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener('click', function (e) { e.preventDefault(); document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }); });

// Optional: Add scroll reveal animations using Intersection Observer const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); } }); }, { threshold: 0.1 });

sections.forEach(section => { section.classList.add('hidden'); observer.observe(section); });