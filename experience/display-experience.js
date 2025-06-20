// Import experience data from separate file
import experienceData from './experience-data.js';

// Function to create work experience entries
function createExperienceEntry(experience) {
  const responsibilitiesList = experience.responsibilities.map(task => `<li>${task}</li>`).join('');

  return `
      <div class="experience-entry">
        <h3>${experience.position}</h3>
        <div class="experience-details">
            <div>
                <p><strong>${experience.company}</strong> | <em>${experience.location}</em></p>
            </div>
            <p><em>${experience.duration}</em></p>
        </div>
        <ul class="responsibilities-list">${responsibilitiesList}</ul>
      </div>
    `;
}

// Function to display work experience on the page
function displayExperience() {
  const container = document.querySelector(".experience-container");

  // Since experienceData is now an array, iterate directly over it
  const experienceHTML = `
    <h1>Work Experience</h1>
    ${experienceData.map(createExperienceEntry).join('')}
  `;
  container.innerHTML = experienceHTML;
}

// Run the display function after DOM content is loaded
document.addEventListener("DOMContentLoaded", displayExperience);
