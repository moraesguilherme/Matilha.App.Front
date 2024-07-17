import './Logo.css';
import logo from '../assets/imgs/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <aside className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo-image" />
        </Link>
    </aside>
);

export default Logo;
