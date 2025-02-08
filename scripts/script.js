// // Theme Selector
// const root_element = document.documentElement;
// const theme_icon = document.querySelector("#theme_icon");

// // Theme Switch functions
// const enable_dark_mode = () => {
//   root_element.setAttribute("data-theme", "dark");
//   localStorage.setItem("theme", "dark");
//   theme_icon.children[0].setAttribute("href", "#sun");
// };

// const disable_dark_mode = () => {
//   root_element.setAttribute("data-theme", "light");
//   localStorage.setItem("theme", "light");
//   theme_icon.children[0].setAttribute("href", "#moon");
// };

// const switch_theme = () => {
//   let data_theme = root_element.getAttribute("data-theme");

//   if (data_theme === "light") enable_dark_mode();
//   else disable_dark_mode();
// };

// // Event Listeners
// theme_icon.addEventListener("click", switch_theme);

// window.onload = () => {
//   let current_theme = localStorage.getItem("theme");

//   if (!current_theme)
//     current_theme = window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   if (current_theme === "dark") enable_dark_mode();
// };

// // Contact Form - Email
// async function send_email() {
//   const processing_alert = document.querySelector("#processing");
//   processing_alert.classList.remove("hidden");
//   Email.send({
//     SecureToken: "ce95cf86-bed2-4107-a466-cbdf6cc2a71a",
//     To: "hello@qrofeus.dev",
//     From: "info@qrofeus.dev",
//     Subject: "New contact form enquiry",
//     Body:
//       "Name: " +
//       document.getElementById("form_name").value +
//       "<br>Mail Id: " +
//       document.getElementById("form_mail").value +
//       "<br>Message: " +
//       document.getElementById("form_message").value,
//   }).then((message) => {
//     processing_alert.classList.add("hidden");
//     if (message === "OK") {
//       let success_alert = document.querySelector("#success");
//       success_alert.classList.remove("hidden");
//       setTimeout(() => {
//         success_alert.classList.add("hidden");
//       }, 5000);
//     } else {
//       let failure_alert = document.querySelector("#failure");
//       failure_alert.classList.remove("hidden");
//       setTimeout(() => {
//         failure_alert.classList.add("hidden");
//       }, 5000);
//     }
//   });
// }

// // Navigation
// const header = document.querySelector("header");
// const content = document.createElement("div");

// content.setAttribute("data-scroll-interact", "");
// header.before(content);

// const content_observer = new IntersectionObserver((entries) => {
//     header.classList.toggle("nav_scrolled", !entries[0].isIntersecting);
// });

// content_observer.observe(content);

// // Mobile Hamburger Menu
// const nav = document.querySelector("#nav_links");
// const nav_toggle = document.querySelector("#menu_icon");

// nav_toggle.addEventListener("click", (e) => {
//     let visible = nav.getAttribute("data-visible");
//     let icon = e.currentTarget.children[0];

//     if (visible === "false") {
//         nav.setAttribute("data-visible", "true");
//         icon.setAttribute("href", "#close");
//     } else {
//         nav.setAttribute("data-visible", "false");
//         icon.setAttribute("href", "#hamburger");
//     }
// })


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
