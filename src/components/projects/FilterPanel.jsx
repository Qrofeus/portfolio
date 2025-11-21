import styles from './FilterPanel.module.css';

function FilterPanel({
  categories,
  selectedCategory,
  onCategoryChange,
  availableTechs,
  selectedTech,
  onTechChange,
}) {
  return (
    <div className={styles.panel}>
      <div className={styles.filterGroup}>
        <h3 className={styles.label}>Category</h3>
        <div className={styles.buttons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
              onClick={() => onCategoryChange(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.label}>Technology</h3>
        <div className={styles.techButtons}>
          {availableTechs.map((tech) => (
            <button
              key={tech}
              className={`${styles.filterButton} ${selectedTech === tech ? styles.active : ''}`}
              onClick={() => onTechChange(tech)}
              aria-pressed={selectedTech === tech}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
