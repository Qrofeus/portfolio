import { GoDownload, GoEye } from 'react-icons/go';
import { PiFilePdf } from 'react-icons/pi';
import styles from './ResumeCard.module.css';

export default function ResumeCard() {
    const resumePath = '/docs/Ninad_Deshpande_Resume.pdf';

    return (
        <div className={styles.resumeCard}>
            <div className={styles.content}>
                <div className={styles.iconContainer}>
                    <PiFilePdf size={48} className={styles.icon} />
                </div>
                <div className={styles.textContent}>
                    <h3 className={styles.title}>Resume</h3>
                    <p className={styles.subtitle}>View or download my resume</p>
                </div>
            </div>
            <div className={styles.buttons}>
                <a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button outlined"
                    aria-label="View resume"
                >
                    <GoEye size={20} />
                    <span>View</span>
                </a>
                <a
                    href={resumePath}
                    download="Ninad_Deshpande_Resume.pdf"
                    className="button"
                    aria-label="Download resume"
                >
                    <GoDownload size={20} />
                    <span>Download</span>
                </a>
            </div>
        </div>
    );
}
