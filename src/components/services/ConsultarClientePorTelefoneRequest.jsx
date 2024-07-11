import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_CLIENTE;

const ConsultarClientePorTelefoneRequest = async (telefone) => {
    try {
        console.log('Buscando cliente pelo telefone:', telefone);
        const response = await axios.get(`${baseUrl}?telefone=${telefone}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar cliente pelo telefone:', error);
        throw error;
    }
};

export default ConsultarClientePorTelefoneRequest;
