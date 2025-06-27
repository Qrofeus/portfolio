// Combined Portfolio Display Script
import educationData from './data/education-data.js';
import experienceData from './data/experience-data.js';

// Function to create education card elements
function createEducationCard(entry) {
  const degreeDescription = entry.description ? `<p>${entry.description}</p>` : '';
  return `
      <div class="entry-card">
        <div class="entry-header">
          <div><strong>${entry.degree}</strong><h3>${entry.major}</h3></div>
          <span class="entry-meta">${entry.date}</span>
        </div>
        <p><strong>${entry.institution}</strong></p>
        <p><strong>GPA:</strong> ${entry.gpa}</p>
        ${degreeDescription}
      </div>
    `;
}

// Function to create certification card elements
function createCertificationCard(cert) {
  return `
    <a href="${cert.certificateLink}" target="_blank" aria-label="View Certificate" class="certification-card">
        <h3>${cert.title}</h3>
        <p><strong>${cert.issuer}</strong> | <em>${cert.date}</em></p>
    </a>
    `;
}

// Function to create work experience entries
function createExperienceEntry(experience) {
  const responsibilitiesList = experience.responsibilities.map(task => `<li>${task}</li>`).join('');

  return `
      <div class="entry-card">
        <div class="entry-header">
          <h3>${experience.position}</h3>
          <span class="entry-meta">${experience.duration}</span>
        </div>
        <p><strong>${experience.company}</strong> | <em>${experience.location}</em></p>
        <ul class="responsibilities-list">${responsibilitiesList}</ul>
      </div>
    `;
}

// Function to display education and certifications
function displayEducation() {
  const container = document.querySelector("#education");
  
  if (!container) return;

  let educationHTML = '<h2>Education</h2>';

  Object.keys(educationData).forEach(section => {
    if (educationData[section].length > 0) {
      if (section === 'Education') {
        // Display education entries
        educationHTML += `
          <div class="education-entries">
            ${educationData[section].map(createEducationCard).join('')}
          </div>
        `;
      } else {
        // Display certifications with their own section
        educationHTML += `
          <div class="section-divider"></div>
          <h3 style="font-size: 2rem; margin: 2em 0 1em 0; color: var(--primary-color);">${section}</h3>
          <div class="certifications-grid">
            ${educationData[section].map(createCertificationCard).join('')}
          </div>
        `;
      }
    }
  });

  container.innerHTML = educationHTML;
}

// Function to display work experience
function displayExperience() {
  const container = document.querySelector("#experience");
  
  if (!container) return;

  const experienceHTML = `
    <h2>Work Experience</h2>
    <div class="experience-entries">
      ${experienceData.map(createExperienceEntry).join('')}
    </div>
  `;
  
  container.innerHTML = experienceHTML;
}

// Main function to initialize all sections
function initializePortfolio() {
  displayEducation();
  displayExperience();
}

// Run the initialization function after DOM content is loaded
document.addEventListener("DOMContentLoaded", initializePortfolio);