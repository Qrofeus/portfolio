import { useState } from 'react';
import { useProjectFilter } from '../hooks/useProjectFilter';
import { projectsData } from '../data/projects-data';
import FilterPanel from '../components/projects/FilterPanel';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectModal from '../components/projects/ProjectModal';
import styles from './Projects.module.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const {
    selectedCategory,
    setSelectedCategory,
    selectedTech,
    setSelectedTech,
    filteredProjects,
    availableTechs,
    categories,
  } = useProjectFilter(projectsData);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.projects}>
      <div className="container section">
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.subtitle}>
          Explore my work across different categories and technologies
        </p>

        <FilterPanel
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          availableTechs={availableTechs}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
        />

        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={handleProjectClick}
        />

        <ProjectModal
          project={selectedProject}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default Projects;
