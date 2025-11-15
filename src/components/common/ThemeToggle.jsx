import { GoSun, GoMoon } from 'react-icons/go';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      <span className={styles.track}>
        <span className={`${styles.thumb} ${theme === 'dark' ? styles.dark : ''}`}>
          {theme === 'light' ? <GoSun /> : <GoMoon />}
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;
