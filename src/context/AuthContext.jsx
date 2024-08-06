import React, { createContext, useState, useContext, useEffect } from 'react';
import { GenerateRefreshTokenRequest } from '../services/GenerateRefreshTokenRequest';
import { ValidateRefreshTokenRequest } from '../services/ValidateRefreshTokenRequest';
import { InvalidateSessionRequest } from '../services/InvalidateSessionRequest';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [sessionId, setSessionId] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const storedSessionId = localStorage.getItem('sessionId');
        setIsAuthenticated(!!storedToken);
        setToken(storedToken);
        setRefreshToken(storedRefreshToken);
        setSessionId(storedSessionId);
    }, []);

    const login = (token, refreshToken, userId, sessionId) => {
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userId', JSON.stringify(userId));
        localStorage.setItem('sessionId', sessionId);
        setIsAuthenticated(true);
        setToken(token);
        setRefreshToken(refreshToken);
        setSessionId(sessionId);
    };

    const logout = async () => {
        try {
            if (sessionId) {
                await InvalidateSessionRequest(sessionId);
            }
        } catch (error) {
            console.error('Erro ao invalidar a sessão:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('sessionId');
            setIsAuthenticated(false);
            setToken(null);
            setRefreshToken(null);
            setSessionId(null);
        }
    };

    const refreshSession = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem('userId'));
            const sessionId = localStorage.getItem('sessionId');
            const response = await GenerateRefreshTokenRequest(userId, sessionId);
            if (response.token) {
                localStorage.setItem('token', response.token);
                setToken(response.token);
            }
        } catch (error) {
            console.error('Erro ao atualizar o token:', error);
            logout();
        }
    };

    const validateToken = async () => {
        if (isAuthenticated && token) {
            try {
                await ValidateRefreshTokenRequest(refreshToken);
            } catch (error) {
                await refreshSession();
            }
        }
    };

    useEffect(() => {
        validateToken();
    }, [token]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, token, refreshSession, validateToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
