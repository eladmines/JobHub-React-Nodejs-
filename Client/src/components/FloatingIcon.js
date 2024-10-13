
import React, { useState } from 'react';
import './FloatingIcon.css';
import { Popup } from './PopUp';
import bellIcon from '../assets/img/bell.png'; // Adjust path accordingly
export const FloatingIcon = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup); // Toggle the popup visibility
  };

  const handleClose = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="floating-icon" onClick={handleClick}>
      <img src={bellIcon} alt="Helper Icon" className="icon-image" />
      {showPopup && <Popup onClose={handleClose} />}
    </div>
  );
};

