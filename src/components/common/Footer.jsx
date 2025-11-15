import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className={styles.linkList}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Connect</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com/in/qrofeus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Qrofeus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:hello@qrofeus.dev"
                aria-label="Email"
                className={styles.socialLink}
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} Ninad Deshpande.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
