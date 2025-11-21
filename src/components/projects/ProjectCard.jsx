import styles from './ProjectCard.module.css';

function ProjectCard({ project, onClick }) {
  return (
    <article
      className={styles.card}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className={styles.header}>
        <span className={styles.category}>{project.category}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.technologies}>
        {project.technologies.slice(0, 4).map((tech) => (
          <span key={tech} className={styles.chip}>
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className={styles.chip}>+{project.technologies.length - 4}</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
