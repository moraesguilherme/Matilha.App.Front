import React from "react";
import './Card.css';
import { FaTrash } from 'react-icons/fa';

const Card = ({ title, content, onRemove }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
                <button onClick={onRemove} className="remove-button">
                    <FaTrash />
                </button>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default Card;
