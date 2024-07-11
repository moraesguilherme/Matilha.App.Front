import axios from './AxiosConfig';

const API_URL = process.env.REACT_APP_BACKEND_URL_TEMPORADA;

export async function ExcluirDataAltaTemporadaRequest(id) {
    try {
        await axios.delete(`${API_URL}/datas-alta-temporada/${id}`);
    } catch (error) {
        console.error('Erro ao excluir data de alta temporada:', error);
        throw error;
    }
}