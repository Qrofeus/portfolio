import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

function ProjectGrid({ projects, onProjectClick }) {
  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No projects match the selected filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={`${project.category}-${project.title}`}
          project={project}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
