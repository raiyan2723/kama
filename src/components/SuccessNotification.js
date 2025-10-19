import React, { useEffect } from 'react';

const SuccessNotification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification success">
      <div className="notification-content">
        <i className="icon-check"></i>
        <p>{message}</p>
      </div>
      <button className="notification-close" onClick={onClose}>×</button>
    </div>
  );
};

export default SuccessNotification;