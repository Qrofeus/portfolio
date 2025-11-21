import styles from './AboutMeSection.module.css';

export default function AboutMeSection() {
    return (
        <section className={styles.aboutMe}>
            <p className={styles.bio}>
                I'm a software developer passionate about building scalable web applications
                and solving complex problems. With expertise in full-stack development, machine learning,
                and cloud technologies, I bring a comprehensive approach to every project.
            </p>
            <p className={styles.bio}>
                Currently pursuing my Master's in Computer & Information Science at Purdue University,
                I combine academic research with practical experience to deliver innovative solutions.
                I'm particularly interested in natural language processing, distributed systems, and
                creating efficient automation tools.
            </p>
        </section>
    );
}
