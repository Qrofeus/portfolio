// Sample data for projects
const projectsData = {
    "Web Development": [
        {
            title: "Online Quiz",
            technologies: ["OpenTDB API", "HTML", "CSS", "JavaScript"],
            description: "A multiple choice trivia quiz of 10 questions fetched using the OpenTDB API.",
            sourceLink: "https://github.com/Qrofeus/online-quiz",
            liveLink: "https://quiz.qrofeus.dev/"
        },
        {
            title: "Weather App",
            technologies: ["OpenWeather API", "HTML", "CSS", "JavaScript"],
            description: "A weather web application that fetches real-time weather data using the OpenWeather API.",
            sourceLink: "https://github.com/Qrofeus/weather-web-application",
            liveLink: "https://weather.qrofeus.dev/"
        },
        {
            title: "Digital Clock",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "A simple digital clock web application that displays the current time dynamically updated using JavaScript.",
            sourceLink: "https://github.com/Qrofeus/digital-clock-webapp",
            liveLink: "https://qrofeus.github.io/digital-clock-webapp/"
        },
        {
            title: "Portfolio website",
            technologies: ["HTML", "CSS", "JavaScript"],
            description: "[This website] Personal portfolio website showcasing my projects, skills, and experiences with a modern responsive design.",
            sourceLink: "https://github.com/Qrofeus/portfolio",
            liveLink: "https://qrofeus.dev/"
        }
    ],
    "Other Projects": [
        {
            title: "Enigma Machine Simulation: Console",
            technologies: ["Python"],
            description: "A console based simulation of the widely known Enigma Machine, allowing you to encrypt and decrypt messages using methods similar to the ones used in war times.",
            sourceLink: "https://github.com/Qrofeus/Enigma-Machine",
        },
        {
            title: "Sorting Algorithms - Visualization Tool",
            technologies: ["Python", "PyGame"],
            description: "Python implementations for widely known sorting algorithms. Complete with explanation and animations that help in understanding the sorting algorithms.",
            sourceLink: "https://github.com/Qrofeus/sorting-algorithms",
        },
    ],
    "Research Projects": [
        {
            title: "Cyberbullying Detection with Distributed Computing",
            technologies: ["Python", "Random Forest", "CNN", "Logistic Regression", "Naive Bayes", "LSTM", "BERT", "Distributed Systems"],
            description: "Developed a distributed system for cyberbullying detection across multilingual datasets. Trained and optimized multiple machine learning classifiers (Random Forest, CNN, and BERT) for four different languages, achieving close to 90% accuracy through advanced ensemble methods and optimization techniques."
        },
    ]
};

// Function to create project card elements
function createProjectCard(project) {
    const techList = project.technologies.map(tech => `<li>${tech}</li>`).join('');

    // Check if links exist, otherwise exclude the buttons
    const sourceLinkButton = project.sourceLink
        ? `<a href="${project.sourceLink}" target="_blank" aria-label="Source Code">
                    <svg width="1em" height="1em" fill="currentColor">
                        <use href="#icon-link"></use>
                    </svg>
                </a>`: '';
    const liveDemoButton = project.liveLink
        ? `<a href="${project.liveLink}" target="_blank" aria-label="Live Demo">
            <svg width="1em" height="1em" fill="currentColor">
                <use href="#icon-open"></use>
            </svg>
        </a>`: '';
    
    return `
    <div class="project-card">
        <div class="project-title">
            <h3>${project.title}</h3>
            <div class="project-links">
                ${sourceLinkButton}
                ${liveDemoButton}
            </div>
        </div>
        <hr>
        <ul class="tech-list">${techList}</ul>
        <hr>
        <p>${project.description}</p>       
    </div>
    `;
}

// Function to display projects on the page
function displayProjects() {
    const container = document.querySelector(".projects-container");

    Object.keys(projectsData).forEach(section => {
        const sectionHTML = `
        <section class="project-section">
          <h2>${section}</h2>
          <div class="project-list">
            ${projectsData[section].map(createProjectCard).join('')}
          </div>
        </section>
      `;

        container.innerHTML += sectionHTML;
    });
}

// Run the display function after DOM content is loaded
document.addEventListener("DOMContentLoaded", displayProjects);
