import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './HamburgerMenu.module.css';

function HamburgerMenu({ isOpen, onClick }) {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
}

export default HamburgerMenu;
