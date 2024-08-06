import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_SESSION;

export const InvalidateSessionRequest = async (sessionId) => {
    try {
        const response = await axios.post(`${baseUrl}/invalidate/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao invalidar a sessão:', error);
        throw error;
    }
};
