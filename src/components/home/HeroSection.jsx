import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './HeroSection.module.css';

function HeroSection() {
  const scrollToFeatured = () => {
    const element = document.getElementById('featured-projects');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>Ninad Deshpande</h1>
      <p className={styles.tagline}>Software Developer | Machine Learning Engineer</p>
      <p className={styles.bio}>Building intelligent systems and scalable applications</p>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/Qrofeus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="button large"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/qrofeus"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="button large"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:hello@qrofeus.dev"
          aria-label="Email"
          className="button large"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className={styles.ctaButtons}>
        <div onClick={scrollToFeatured} className="button filled large">
          View Projects
        </div>
        <Link to="/about" className="button outlined large">
          About Me
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
