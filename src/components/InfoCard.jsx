import React from 'react';
import './InfoCard.css';

const InfoCard = ({ title, value, description }) => (
  <div className="info-card">
    <h3>{title}</h3>
    <p>{value}</p>
    <p>{description}</p>
  </div>
);

export default InfoCard;