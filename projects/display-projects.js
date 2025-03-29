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
    "Python": [
        {
            title: "Enigma Machine Simulation: Console",
            technologies: ["Python"],
            description: "A console based simulation of the widely known Enigma Machine, allowing you to encrypt and decrypt messages using methods similar to the ones used in war times.",
            sourceLink: "https://github.com/Qrofeus/Enigma-Machine"
        },
        {
            title: "Sorting Algorithms - Visualization Tool",
            technologies: ["Python", "PyGame"],
            description: "Python implementations for widely known sorting algorithms. Complete with explanation and animations that help in understanding the sorting algorithms.",
            sourceLink: "https://github.com/Qrofeus/sorting-algorithms"
        },
        {
            "title": "Path-Finding Algorithms",
            "technologies": ["Python", "PyGame"],
            "description": "Visualized A* pathfinding algorithm using Python and PyGame, for interactive and intuitive understanding of the algorithm.",
            "sourceLink": "https://github.com/Qrofeus/path-finding-algorithms"
        }
    ],
    "Research Project": [
        {
            title: "Cyberbullying Detection with Distributed Computing",
            technologies: ["Python", "Random Forest, CNN", "Logistic Regression", "BERT", "Distributed Systems"],
            description: "Developed a distributed system for cyberbullying detection across multilingual datasets. Trained and optimized multiple machine learning classifiers achieving close to 90% accuracy through advanced ensemble methods."
        },
        {
            title: "Customer Relationship Management Web Application",
            technologies: ["PHP", "MySQL", "Bootstrap", "AWS"],
            description: "Engineered a modular CRM system hosted on company servers with real-time analytics and predictive modeling to enhance lead conversion. Implemented secure authentication with role-based access control.",
        }
    ],
    "Software Engineering": [
        {
            title: "Chrome Extension Auto-fill",
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "Developed a Chrome extension to autofill forms, reducing user data entry time by 75%. Implemented real-time field detection and customization features for enhanced usability.",
        },
        {
            title: "Java Projects",
            technologies: ["Java"],
            description: "Built a collection of Java-based applications, including Fortune Cookie and Tic-Tac-Toe games, with Windows executable versions for instant play. Enhanced gameplay logic and UI responsiveness for an interactive user experience.",
            sourceLink: "https://github.com/Qrofeus/Java-Projects"
        },
        {
            title: "Music Player",
            technologies: ["Kotlin"],
            description: "Built an android music player application using Kotlin with an interactive UI",
            sourceLink: "https://github.com/Qrofeus/Music_Player"
        }
    ],
};

// Extract unique categories and technologies
const categories = Object.keys(projectsData);
const technologies = [...new Set(Object.values(projectsData).flat().flatMap(project => project.technologies))];

let selectedCategory = null;
let selectedTechnology = null;

// Function to create filter lists
function createFilterLists() {
    const categoryContainer = document.getElementById("category-list");
    const techContainer = document.getElementById("tech-list");

    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        li.addEventListener("click", () => toggleFilter("category", category, li));
        categoryContainer.appendChild(li);
    });

    technologies.forEach(tech => {
        const li = document.createElement("li");
        li.textContent = tech;
        li.addEventListener("click", () => toggleFilter("technology", tech, li));
        techContainer.appendChild(li);
    });
}

// Function to create project cards
function createProjectCard(project) {
    const techList = project.technologies.map(tech => `<li>${tech}</li>`).join('');

    // Check if links exist, otherwise exclude the buttons
    const sourceLinkButton = project.sourceLink
        ? `<a href="${project.sourceLink}" target="_blank" aria-label="Source Code" onclick="event.stopPropagation();">
                    <svg width="1em" height="1em" fill="currentColor">
                        <use href="#icon-link"></use>
                    </svg>
                </a>`: '';
    const liveDemoButton = project.liveLink
        ? `<a href="${project.liveLink}" target="_blank" aria-label="Live Demo" onclick="event.stopPropagation();">
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

// Function to display projects based on filters
function filterProjects() {
    const projectsList = document.querySelector("#projects-list");
    projectsList.innerHTML = "";

    let filteredProjects = [];

    if (selectedCategory) {
        filteredProjects = projectsData[selectedCategory] || [];
    } else {
        filteredProjects = Object.values(projectsData).flat();
    }

    if (selectedTechnology) {
        filteredProjects = filteredProjects.filter(project => project.technologies.includes(selectedTechnology));
    }

    filteredProjects.forEach(project => {
        projectsList.innerHTML += createProjectCard(project);
    });

    // Add click event listeners to all project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function (event) {
            // Toggle expanded class
            this.classList.toggle('expanded');

            // If a card is expanded, scroll it into view if needed
            if (this.classList.contains('expanded')) {
                const rect = this.getBoundingClientRect();
                if (rect.bottom > window.innerHeight) {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    });

    updateTechList(filteredProjects);
}

// Function to update the displayed technologies based on selected category
function updateTechList(filteredProjects) {
    const techContainer = document.getElementById("tech-list");
    techContainer.innerHTML = "";

    const usedTechnologies = [...new Set(filteredProjects.flatMap(project => project.technologies))];

    usedTechnologies.forEach(tech => {
        const li = document.createElement("li");
        li.textContent = tech;
        li.addEventListener("click", () => toggleFilter("technology", tech, li));
        techContainer.appendChild(li);
    });
}

// Function to toggle filters
function toggleFilter(type, value, element) {
    if (type === "category") {
        selectedCategory = selectedCategory === value ? null : value;
        selectedTechnology = null; // Reset technology filter when category changes
    } else if (type === "technology") {
        selectedTechnology = selectedTechnology === value ? null : value;
    }

    document.querySelectorAll("#category-list li, #tech-list li").forEach(li => li.classList.remove("active"));
    if (selectedCategory) {
        document.querySelectorAll("#category-list li").forEach(li => {
            if (li.textContent === selectedCategory) li.classList.add("active");
        });
    }
    if (selectedTechnology) {
        document.querySelectorAll("#tech-list li").forEach(li => {
            if (li.textContent === selectedTechnology) li.classList.add("active");
        });
    }
    filterProjects();
}

// Initial display of all projects
document.addEventListener("DOMContentLoaded", () => {
    createFilterLists();
    filterProjects();
});