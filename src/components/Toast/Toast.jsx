import { useEffect } from 'react';
import './Toast.css';

export function Toast({ message, variant = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div role="alert" className={`toast toast-${variant}`}>
      <span>{message}</span>
      <button aria-label="close" onClick={onClose}>✕</button>
    </div>
  );
}