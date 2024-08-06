import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated, validateToken } = useAuth();

    useEffect(() => {
        validateToken();
    }, [validateToken]);

    return isAuthenticated ? element || <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;