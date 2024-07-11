import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/App.css';

const Layout = () => (
    <div className="app">
        <Logo />
        <Nav />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
);

export default Layout;
