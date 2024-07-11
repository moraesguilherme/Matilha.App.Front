import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const ExcluirPrecoRequest = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/precos/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao excluir preço:', error);
        throw error;
    }
};

export default ExcluirPrecoRequest;