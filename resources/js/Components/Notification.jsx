// Notification.js

import React from 'react';

const Notification = ({ onClose }) => {
  return (
    <div className="notification">
      <p>Your notification content goes here.</p>
      <button className="btn btn-primary mt-2" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Notification;
