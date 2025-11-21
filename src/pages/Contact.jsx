import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import styles from './Contact.module.css';

function Contact() {
    return (
        <div className="section">
            <div className="container">
                <h1>Get in Touch</h1>
                <p className={styles.subtitle}>
                    Have a project in mind or want to collaborate? I'd love to hear from you!
                </p>
            </div>

            <div className={styles.contactCard}>
                <div className={styles.contactContainer}>
                    <div className={styles.formSection}>
                        <h2>Contact Form</h2>
                        <ContactForm/>
                    </div>

                    <div className={styles.socialSection}>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
