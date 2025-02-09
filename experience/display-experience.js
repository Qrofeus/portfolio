// Sample data for work experience
const experienceData = {
    "Tech": [],
    "Other": [
      {
        position: "Mailroom Assistant",
        company: "Luddy School of Informatics, Computing and Engineering",
        location: "Indianapolis, IN",
        duration: "January 2025 – Present",
        responsibilities: [
          "Managed mailroom operations, ensuring the efficient handling of all incoming and outgoing deliveries.",
          "Maintained accurate records for cataloging new library materials and processing shipments.",
          "Developed strong organizational and logistical skills in a dynamic academic environment."
        ]
      }
    ]
  };
  
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
  
    Object.keys(experienceData).forEach(section => {
      if (experienceData[section].length > 0) {
        const sectionHTML = `
          <section class="experience-section">
            <h2>${section}</h2>
            <div class="experience-list">
              ${experienceData[section].map(createExperienceEntry).join('')}
            </div>
          </section>
        `;
        container.innerHTML += sectionHTML;
      }
    });
  }
  
  // Run the display function after DOM content is loaded
  document.addEventListener("DOMContentLoaded", displayExperience);
  