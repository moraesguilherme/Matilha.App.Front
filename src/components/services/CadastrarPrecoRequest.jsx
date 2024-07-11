import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_ORCAMENTO;

const CadastrarPrecoRequest = async (preco) => {
    try {
        console.log('cheguei aqui');
        const response = await axios.post(`${baseUrl}/precos`, preco, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar preço:', error);
        throw error;
    }
};

export default CadastrarPrecoRequest;
