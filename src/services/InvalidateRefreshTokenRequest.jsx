import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_REFRESHTOKEN;

export const InvalidateRefreshTokenRequest = async (token) => {
    try {
        const response = await axios.post(`${baseUrl}/invalidate/${token}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao invalidar o refresh token:', error);
        throw error;
    }
};
