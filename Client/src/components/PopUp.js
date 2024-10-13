// Popup.js
import React from 'react';
import './Popup.css';

export const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>📢 New Job Offers Available!</h2>
        <p>Exciting new job opportunities are waiting for you!</p>
        <p>Check them out now and take the next step in your career.</p>
        <button onClick={onClose} className="popup-button">Close</button>
      </div>
    </div>
  );
};
