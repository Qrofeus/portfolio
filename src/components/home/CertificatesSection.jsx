import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { certificationData } from '../../data/education-data';
import CertificateCard from './CertificateCard';
import styles from './CertificatesSection.module.css';

export default function CertificatesSection() {
    return (
        <section className={styles.certificatesSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Certifications</h2>
            </div>
            <div className={styles.certificates}>
                {certificationData.map((cert, index) => (
                    <CertificateCard key={index} {...cert} />
                ))}
            </div>

            <Link to="/about" className="button outlined">
                More About Me <HiArrowRight />
            </Link>
        </section>
    );
}
