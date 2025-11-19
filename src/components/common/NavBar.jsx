import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import HamburgerMenu from './HamburgerMenu';
import ThemeToggle from './ThemeToggle';
import { FaTimes } from 'react-icons/fa';
import styles from './NavBar.module.css';

function NavBar() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackdropClick = () => {
    closeMenu();
  };

  const handleDrawerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <Link to="/" className={styles.logo}>
          <h3>Ninad Deshpande</h3>
        </Link>

        <div className={styles.navRight}>
          <div className={styles.navLinks}>
            <Link
              to="/projects"
              className={`button ${location.pathname === '/projects' ? styles.active : ''}`}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`button ${location.pathname === '/about' ? styles.active : ''}`}
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className={`button ${location.pathname === '/contact' ? styles.active : ''}`}
            >
              Contact
            </Link>
          </div>

          <div className={styles.desktopThemeToggle}>
            <ThemeToggle />
          </div>
          <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.open : ''}`} onClick={handleBackdropClick}>
        <div className={styles.drawerContent} onClick={handleDrawerClick}>
          <div>
            <div className={styles.drawerHeader}>
              <h3>Menu</h3>
              <button className={styles.closeButton} onClick={closeMenu} aria-label="Close menu">
                <FaTimes />
              </button>
            </div>
            <nav className={styles.mobileNavLinks}>
              <Link
                to="/projects"
                className={`button ${location.pathname === '/projects' ? styles.active : ''}`}
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className={`button ${location.pathname === '/about' ? styles.active : ''}`}
                onClick={closeMenu}
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className={`button ${location.pathname === '/contact' ? styles.active : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className={styles.mobileThemeToggle}>
            <div className={styles.themeToggleContainer}>
              <span className={styles.themeToggleLabel}>Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
