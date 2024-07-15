import React from 'react';
import './Notifications.css';

const Notifications = ({ message, type, onClose }) => (
    <div className={`notifications ${type}`}>
        <div className="notification-header">
            <h2>Notifications</h2>
            <button onClick={onClose}>X</button>
        </div>
        <p>{message ? message : 'Últimas notificações'}</p>
    </div>
);

export default Notifications;
