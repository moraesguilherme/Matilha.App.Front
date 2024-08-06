import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_REFRESHTOKEN;

export const GenerateRefreshTokenRequest = async (userId, companyId, sessionId) => {
    try {
        const response = await axios.post(`${baseUrl}/generate`, {
            userId: userId,
            companyId: companyId,
            sessionId: sessionId
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao gerar o refresh token:', error);
        throw error;
    }
};
