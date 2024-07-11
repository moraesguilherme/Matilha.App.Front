import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const ConsultarPrecosRequest = async () => {
    try {
        const response = await axios.get(`${baseUrl}/precos`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter preços:', error);
        throw error;
    }
};

export default ConsultarPrecosRequest;