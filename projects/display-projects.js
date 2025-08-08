import projectsData from '../scripts/data/projects-data.js';

// Extract unique categories and technologies
const categories = Object.keys(projectsData);
const technologies = [...new Set(Object.values(projectsData).flat().flatMap(project => project.technologies))];

let selectedCategory = null;
let selectedTechnology = null;

// Modal elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalTechnologies = document.getElementById('modal-technologies');
const modalDescription = document.getElementById('modal-description');
const modalLinks = document.getElementById('modal-links');
const modalCloseBtn = document.getElementById('modal-close');

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
    <div class="project-card" data-project='${JSON.stringify(project).replace(/'/g, "&apos;")}'>
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

// Function to open modal with project details
function openModal(project) {
    // Set modal content
    modalTitle.textContent = project.title;
    
    // Clear and populate technologies
    modalTechnologies.innerHTML = '';
    project.technologies.forEach(tech => {
        const techChip = document.createElement('span');
        techChip.className = 'tech-chip';
        techChip.textContent = tech;
        modalTechnologies.appendChild(techChip);
    });
    
    // Set description with proper paragraph formatting
    const detailedDesc = project.detailedDescription || project.description;
    const paragraphs = detailedDesc.split('\n\n').filter(p => p.trim());
    modalDescription.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
    
    // Clear and populate links
    modalLinks.innerHTML = '';
    if (project.sourceLink) {
        const sourceBtn = document.createElement('a');
        sourceBtn.href = project.sourceLink;
        sourceBtn.target = '_blank';
        sourceBtn.rel = 'noopener noreferrer';
        sourceBtn.innerHTML = `
            <svg width="1em" height="1em" fill="currentColor">
                <use href="#icon-link"></use>
            </svg>
            View Source Code
        `;
        modalLinks.appendChild(sourceBtn);
    }
    
    if (project.liveLink) {
        const liveBtn = document.createElement('a');
        liveBtn.href = project.liveLink;
        liveBtn.target = '_blank';
        liveBtn.rel = 'noopener noreferrer';
        liveBtn.innerHTML = `
            <svg width="1em" height="1em" fill="currentColor">
                <use href="#icon-open"></use>
            </svg>
            Live Demo
        `;
        modalLinks.appendChild(liveBtn);
    }
    
    // Show modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    
    // Focus trap - focus the close button
    modalCloseBtn.focus();
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
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
            // Don't open modal if clicking on project links
            if (event.target.closest('.project-links a')) {
                return;
            }
            
            // Get project data from the card
            const projectData = JSON.parse(this.getAttribute('data-project').replace(/&apos;/g, "'"));
            openModal(projectData);
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

// Modal event listeners
function setupModalEventListeners() {
    // Close modal when clicking close button
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking backdrop
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Prevent modal content clicks from closing modal
    document.querySelector('.modal-content').addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

// Initial display of all projects
document.addEventListener("DOMContentLoaded", () => {
    createFilterLists();
    filterProjects();
    setupModalEventListeners();
});