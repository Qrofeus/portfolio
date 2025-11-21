import styles from './FeaturedCard.module.css';

function FeaturedCard({ title, description, liveLink, category, tech = [] }) {
  return (
    <a
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {category && (
        <span className={styles.categoryBadge}>{category}</span>
      )}

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {tech.length > 0 && (
          <div className={styles.techStack}>
            {tech.map((t, index) => (
              <img
                key={index}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t.icon}.svg`}
                alt={t.name}
                title={t.name}
                className={styles.techIcon}
              />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

export default FeaturedCard;
