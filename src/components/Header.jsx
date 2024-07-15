import './Header.css';
import React from 'react';

const Header = ({ icon, title, subtitle }) => (
    <header className="header">
        <h1 className='mt-3'>
            <i className={`fa fa-${icon}`}></i> {title}
        </h1>
        <p className="lead text-muted">{subtitle}</p>
    </header>
);

export default Header;
