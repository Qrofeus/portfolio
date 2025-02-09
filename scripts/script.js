// Theme Toggle and Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.querySelector('#theme-toggle');
  const themeToggleText = document.querySelector("#theme-text");

  const menuToggleButton = document.querySelector('#menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentTheme = localStorage.getItem('theme');

  // Initialize Theme
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggleButton.querySelector('use').setAttribute('href', '#icon-moon');
    themeToggleText.textContent = 'Dark Mode';
  } else {
    themeToggleButton.querySelector('use').setAttribute('href', '#icon-sun');
    themeToggleText.textContent = 'Light Mode';
  }

  // Theme Toggle Functionality
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    let theme = 'dark';
    if (document.body.classList.contains('light-theme')) {
      theme = 'light';
      themeToggleButton.querySelector('use').setAttribute('href', '#icon-moon');
      themeToggleText.textContent = 'Dark Mode';
    } else {
      themeToggleButton.querySelector('use').setAttribute('href', '#icon-sun');
      themeToggleText.textContent = 'Light Mode';
    }

    localStorage.setItem('theme', theme);
  });

  // Mobile Navigation Toggle
  menuToggleButton.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');

    if (navLinksContainer.classList.contains('active')) {
      menuToggleButton.querySelector('use').setAttribute('href', '#icon-close');
    } else {
      menuToggleButton.querySelector('use').setAttribute('href', '#icon-hamburger');
    }
  });

  // Close Mobile Nav on Link Click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
      menuToggleButton.querySelector('use').setAttribute('href', '#icon-hamburger');
    });
  });

  // Section Fade-in Animation
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
