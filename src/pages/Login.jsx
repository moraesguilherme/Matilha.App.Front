import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LoginRequest } from '../services/LoginRequest';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/imgs/logo.png';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [capsLockOn, setCapsLockOn] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const credentials = { username, passwordHash: password };
            const data = await LoginRequest(credentials);
            login(data.token);
            navigate('/');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleKeyUp = (e) => setCapsLockOn(e.getModifierState && e.getModifierState('CapsLock'));

    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-logo">
                    <img src={logo} alt="logo" className="logo-image" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Usuário</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Senha</label>
                        <div className="password-input-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                onKeyUp={handleKeyUp}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password-visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="caps-lock-container">
                            <p className={`caps-lock-warning ${capsLockOn ? 'visible' : ''}`}>Caps Lock ligado!</p>
                        </div>
                    </div>
                    <button type="submit" className="login-button">Entrar</button>
                </form>
                <div className="login-options">
                    <a href="/forgot-password">Esqueceu a senha?</a>
                    <a href="/signup">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
