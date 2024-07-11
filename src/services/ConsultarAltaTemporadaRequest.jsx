import axios from './AxiosConfig';

const API_URL = process.env.REACT_APP_BACKEND_URL_TEMPORADA;

export async function ObterDatasAltaTemporadaRequest() {
    try {
        const response = await axios.get(`${API_URL}/datas-alta-temporada`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar datas de alta temporada:', error);
        throw error;
    }
}