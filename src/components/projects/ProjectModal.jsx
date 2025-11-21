import { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import styles from './ProjectModal.module.css';

function ProjectModal({ project, open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [open]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!project) return null;

  // Split detailed description into paragraphs
  const descriptionText = project.detailedDescription || project.description;
  const paragraphs = descriptionText.split('\n\n').filter(Boolean);

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onClick={handleBackdropClick}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <div className={styles.content}>
        <header className={styles.header}>
          <div>
            <span className={styles.category}>{project.category}</span>
            <h2 id="modal-title" className={styles.title}>{project.title}</h2>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </header>

        <div className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.chip}>{tech}</span>
          ))}
        </div>

        <footer className={styles.footer}>
          {project.sourceLink && (
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} button`}
            >
              <FaGithub size={18} />
              Source Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} button filled`}
            >
              <FaExternalLinkAlt size={16} />
              Live Demo
            </a>
          )}
        </footer>
      </div>
    </dialog>
  );
}

export default ProjectModal;
