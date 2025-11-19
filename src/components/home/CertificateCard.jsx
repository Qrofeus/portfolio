import { PiCertificate } from "react-icons/pi";
import styles from './CertificateCard.module.css';

const iconMap = {
    'Amazon Web Services (AWS)': '/icons/aws.svg',
    'Google Career Certificates': '/icons/google.svg',
    'Google': '/icons/google.svg',
    'IBM': '/icons/ibm.svg',
    'Coursera': '/icons/coursera.svg',
    'Purdue University': '/icons/purdue.svg',
};

export default function CertificateCard({ title, issuer, date, certificateLink, cedid }) {
    const iconSrc = iconMap[issuer];

    return (
        <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            aria-label={`${title} from ${issuer}`}
        >
            <div className={styles.iconContainer}>
                {iconSrc ? (
                    <img src={iconSrc} alt={`${issuer} logo`} width={48} height={48} />
                ) : (
                    <PiCertificate size={48} />
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.issuer}>{issuer}</p>
                {cedid && <p className={styles.cedid}>CeDiD: {cedid}</p>}
            </div>
        </a>
    );
}
