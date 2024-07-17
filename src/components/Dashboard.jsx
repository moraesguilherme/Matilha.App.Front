import React from "react";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="greeting-section">
                    <img src="../assets/Avatar.png" alt="Avatar" className="avatar-image" />
                    <div className="greeting-text">
                        <h2>Olá, Usuário</h2>
                        <p>Bem-vindo ao painel de gestão de pet creche e hotel!</p>
                    </div>
                </div>
            </header>
            <main className="dashboard-main">
                <div className="card-container">
                    {/* Adicione seus cards aqui */}
                    <div className="card">
                        <h3>Card 1</h3>
                        <p>Conteúdo do card 1</p>
                    </div>
                    <div className="card">
                        <h3>Card 2</h3>
                        <p>Conteúdo do card 2</p>
                    </div>
                    <div className="card">
                        <h3>Card 3</h3>
                        <p>Conteúdo do card 3</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
