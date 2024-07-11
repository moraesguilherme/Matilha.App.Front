import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const ConsultarOrcamentoPorNumeroProposta = async (numeroProposta) => {
    try {
        console.log('Consultando orçamento pelo número da proposta:', numeroProposta);
        const response = await axios.get(`${baseUrl}/${numeroProposta}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao consultar orçamento:', error);
        throw error;
    }
};

export default ConsultarOrcamentoPorNumeroProposta;