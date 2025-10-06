// Combined Portfolio Display Script
import educationData from './data/education-data.js';
import experienceData from './data/experience-data.js';

// Function to create education card elements
function createEducationCard(entry) {
  const courseworkSection = entry.coursework && entry.coursework.length > 0 ? `
    <div class="coursework-section">
      <h4>Coursework</h4>
      <div class="coursework-tags">
        ${entry.coursework.map(course => `<span class="coursework-tag">${course}</span>`).join('')}
      </div>
    </div>
  ` : '';

  return `
    <div class="education-card">
      <div class="education-header">
        <div class="education-title-group">
          <div class="degree-type">${entry.degree}</div>
          <h3>${entry.major}</h3>
        </div>
        <div class="education-date-group">
          <div class="entry-date">
            <svg width="16" height="16" fill="currentColor">
              <use href="#icon-calendar"></use>
            </svg>
            <span>${entry.date}</span>
          </div>
          <div class="education-gpa">GPA: ${entry.gpa}</div>
        </div>
      </div>
      
      <div class="education-institution">${entry.institution}</div>
      <div class="education-location">
        <svg width="16" height="16" fill="currentColor">
          <use href="#icon-location"></use>
        </svg>
        <span>${entry.location}</span>
      </div>
      
      ${courseworkSection}
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

// Helper function to bold metrics in achievement text
function boldMetrics(text, metrics) {
  if (!metrics || metrics.length === 0) return text;

  let processedText = text;
  metrics.forEach(metric => {
    // Escape special regex characters in the metric
    const escapedMetric = metric.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedMetric, 'g');
    processedText = processedText.replace(regex, `<strong>${metric}</strong>`);
  });

  return processedText;
}

// Function to create work experience entries
function createExperienceEntry(experience) {
  const achievementsList = experience.achievements.map(achievement => `
    <div class="achievement-item">
      <p>${boldMetrics(achievement.text, achievement.metrics)}</p>
    </div>
  `).join('');

  const techSection = experience.technologies && experience.technologies.length > 0 ? `
    <div class="technologies-section">
      <div class="technology-tags">
        ${experience.technologies.map(tech => `<span class="technology-tag">${tech}</span>`).join('')}
      </div>
    </div>
  ` : '';

  return `
    <div class="experience-card">
      <div class="experience-header">
        <div class="experience-title-group">
          <div class="position-type">${experience.company}</div>
          <h3>${experience.position}</h3>
        </div>
        <div class="experience-date-group">
          <div class="entry-date">
            <svg width="16" height="16" fill="currentColor">
              <use href="#icon-calendar"></use>
            </svg>
            ${experience.duration}
          </div>
        </div>
      </div>
      
      <div class="experience-location">
        <svg width="16" height="16" fill="currentColor">
          <use href="#icon-location"></use>
        </svg>
        <span>${experience.location}</span>
      </div>

      ${techSection}
      
      <div class="achievements-list">
        ${achievementsList}
      </div>
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