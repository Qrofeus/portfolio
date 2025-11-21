import styles from './ListEntryCard.module.css';

export default function ListEntryCard({ title, subtitle, duration, details, technologies }) {
    const renderDetail = (detail) => {
        if (!detail.metrics || detail.metrics.length === 0) {
            return detail.text;
        }

        let result = detail.text;
        detail.metrics.forEach(metric => {
            result = result.replace(metric, `<strong>${metric}</strong>`);
        });

        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.duration}>{duration}</p>
            </div>

            {details && details.length > 0 && (
                <ul className={styles.details}>
                    {details.map((detail, index) => (
                        <li key={index}>{renderDetail(detail)}</li>
                    ))}
                </ul>
            )}

            {technologies && technologies.length > 0 && (
                <div className={styles.technologies}>
                    {technologies.map((tech, index) => (
                        <span key={index} className={styles.techChip}>{tech}</span>
                    ))}
                </div>
            )}
        </div>
    );
}
