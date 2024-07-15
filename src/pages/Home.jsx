// import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Overview from '../components/Overview';
import Statistics from '../components/Statistics';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <aside className="sidebar">
                <Logo />
                <Nav />
            </aside>
            <div className="main-container">
                <Header icon="home" title="Início" subtitle="Orçamentos" />
                <main className="home-container">
                    <div className="greeting-section">
                        <img src="../assets/Avatar.png" alt="Avatar" className="avatar-image" />
                        <div className="greeting-text">
                            <h2>Olá, Usuário</h2>
                            <p>Bem-vindo ao painel de gestão de pet creche e hotel!</p>
                        </div>
                    </div>
                    <div className="sections">
                        <div className="section overview-section">
                            <Overview />
                        </div>
                        <div className="section statistics-section">
                            <Statistics />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
