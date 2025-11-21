import AboutMeSection from '../components/about/AboutMeSection';
import WorkExperienceCard from '../components/about/WorkExperienceCard';
import EducationCard from '../components/about/EducationCard';
import CertificateCard from '../components/home/CertificateCard';
import ResumeCard from '../components/about/ResumeCard';
import { experienceData } from '../data/experience-data';
import { educationData, certificationData } from '../data/education-data';
import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className="container section">
            <h1 className="sectionTitle">About Me</h1>

            <AboutMeSection />

            <section className={styles.subSection}>
                <h2 className={styles.subSectionTitle}>Work Experience</h2>
                <div className={styles.cardGrid}>
                    {experienceData.map((exp, index) => (
                        <WorkExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </section>

            <section className={styles.subSection}>
                <h2 className={styles.subSectionTitle}>Education</h2>
                <div className={styles.cardGrid}>
                    {educationData.map((edu, index) => (
                        <EducationCard key={index} {...edu} />
                    ))}
                </div>
            </section>

            <section className={styles.subSection}>
                <h2 className={styles.subSectionTitle}>Certifications</h2>
                <div className={styles.certificationGrid}>
                    {certificationData.map((cert, index) => (
                        <CertificateCard key={index} {...cert} />
                    ))}
                </div>
            </section>

            <ResumeCard />
        </section>
    );
}
