import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_SESSION;

export const GetSessionRequest = async (sessionId) => {
    try {
        const response = await axios.get(`${baseUrl}/get/${sessionId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter a sessão:', error);
        throw error;
    }
};
