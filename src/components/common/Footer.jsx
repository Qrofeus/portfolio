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
                <li><Link to="/" className="button">Home</Link></li>
                <li><Link to="/projects" className="button">Projects</Link></li>
                <li><Link to="/about" className="button">About</Link></li>
                <li><Link to="/contact" className="button">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <div className={styles.linkGroup}>
            <h3 className={styles.groupTitle}>Connect</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://linkedin.com/in/qrofeus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="button"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Qrofeus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="button"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@qrofeus.dev"
                  aria-label="Email"
                  className="button"
                >
                  <FaEnvelope />
                  <span>Email</span>
                </a>
              </li>
            </ul>
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
