import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

function Toast({ message, type, onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return createPortal(
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
    </div>,
    document.body
  );
}

export default Toast;
