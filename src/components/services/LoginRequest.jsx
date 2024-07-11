import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_AUTH;

export const LoginRequest = async (credentials) => {
    try {
        const response = await axios.post(`${baseUrl}/login`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
};