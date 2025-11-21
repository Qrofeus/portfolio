import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <h2>Socials</h2>
      <div className={styles.linksContainer}>
        <a
          href="https://github.com/Qrofeus"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/qrofeus"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:hello@qrofeus.dev"
          className="button"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
