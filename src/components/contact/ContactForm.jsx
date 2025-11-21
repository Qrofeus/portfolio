import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Fill all fields');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Sending...');

    try {
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        // Handle non-2xx responses
        let errorMessage = 'Send failed';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          // If JSON parse fails, use default message
        }
        toast.error(errorMessage, { id: loadingToast });
        return;
      }

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message sent!', { id: loadingToast });
      } else {
        toast.error(result.message || 'Send failed', { id: loadingToast });
      }
    } catch (error) {
      toast.error('Network error', { id: loadingToast });
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name*"
          className={styles.field}
          maxLength={100}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email address*"
          className={styles.field}
          maxLength={254}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message*"
          rows={6}
          className={styles.field}
          maxLength={2000}
          required
        />
        <button
          type="submit"
          className="button filled large"
          disabled={isSubmitting}
        >
          <FaPaperPlane />
          Submit
        </button>
    </form>
  );
}

export default ContactForm;
