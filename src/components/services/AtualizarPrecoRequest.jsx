import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const AtualizarPrecoRequest = async (id, preco) => {
    try {
        const response = await axios.put(`${baseUrl}/precos/${id}`, preco);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar preço:', error);
        throw error;
    }
};

export default AtualizarPrecoRequest;