import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_SESSION;

export const CreateSessionRequest = async (session) => {
    try {
        const response = await axios.post(`${baseUrl}/create`, session);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar a sessão:', error);
        throw error;
    }
};
