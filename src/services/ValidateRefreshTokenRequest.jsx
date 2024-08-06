import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_REFRESHTOKEN;

export const ValidateRefreshTokenRequest = async (token) => {
    try {
        const response = await axios.get(`${baseUrl}/validate/${token}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao validar o refresh token:', error);
        throw error;
    }
};