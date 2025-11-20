import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Toast from '../common/Toast';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all required fields.', 'failure');
      return;
    }

    setIsSubmitting(true);
    showToast('Processing your message...', 'processing');

    try {
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        showToast('Your message has been sent successfully!', 'success');
      } else {
        showToast(result.message || 'Failed to send your message. Please try again.', 'failure');
      }
    } catch (error) {
      showToast('Network error. Please try again later.', 'failure');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <fieldset disabled>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name*"
            className={styles.field}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email address*"
            className={styles.field}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            rows={6}
            className={styles.field}
            required
          />
          <button
            type="submit"
            className="button filled large"
            disabled
          >
            <FaPaperPlane />
            Submit
          </button>
        </fieldset>
      </form>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: '', type: '' })}
      />
    </>
  );
}

export default ContactForm;
