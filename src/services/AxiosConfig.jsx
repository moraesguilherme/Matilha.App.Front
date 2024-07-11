import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useContext, useEffect } from 'react';

const setupAxiosInterceptors = (token) => {
    axios.interceptors.request.use(
        config => {
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
};

export const AxiosConfig = () => {
    const { token } = useContext(AuthContext);
    useEffect(() => {
        setupAxiosInterceptors(token);
    }, [token]);

    return null;
};

export default axios;