import React from 'react';
import './WelcomeMessage.css';

const WelcomeMessage = ({ userName }) => (
  <div className="welcome-message">
    <h2>Welcome Back, {userName} 👋</h2>
  </div>
);

export default WelcomeMessage;