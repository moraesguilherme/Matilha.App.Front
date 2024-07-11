import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const EnviarOrcamento = async (dadosOrcamento) => {
    try {
        console.log('Requisição enviada para o backend:', dadosOrcamento);
        const response = await axios.post(baseUrl, dadosOrcamento);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar o orçamento:', error);
        throw error;
    }
};

export default EnviarOrcamento;
