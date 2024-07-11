import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const AtualizarOrcamento = async (orcamentoId, dadosOrcamento) => {
    try {
        console.log('Requisição enviada para o backend:', dadosOrcamento); 
        const response = await axios.put(`${baseUrl}/${orcamentoId}`, dadosOrcamento);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar o orçamento:', error);
        throw error;
    }
};

export default AtualizarOrcamento;
