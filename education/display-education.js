import educationData from './education-data.js';

// Function to create education card elements
function createEducationCard(entry) {
  const degreeDescription = entry.description ? `<p>${entry.description}</p>` : '';
  return `
      <div class="education-card">
        <div>
          <h3>${entry.degree}</h3>
          <p><strong>GPA:</strong> ${entry.gpa}</p>
        </div>
        <div class="education-details">
            <p><strong>${entry.institution}</strong></p>
            <p><em>${entry.date}</em></p>
        </div>
        ${degreeDescription} <!-- Conditionally rendered text -->
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

// Function to display education and certifications on the page
function displayEducation() {
  const container = document.querySelector(".education-container");

  Object.keys(educationData).forEach(section => {
    if (educationData[section].length > 0) {
      const sectionHTML = `
          <section class="education-section">
            <h2>${section}</h2>
            <div class="education-list">
              ${educationData[section].map(section === 'Education' ? createEducationCard : createCertificationCard).join('')}
            </div>
          </section>
        `;
      container.innerHTML += sectionHTML;
    }
  });
}

// Run the display function after DOM content is loaded
document.addEventListener("DOMContentLoaded", displayEducation);
