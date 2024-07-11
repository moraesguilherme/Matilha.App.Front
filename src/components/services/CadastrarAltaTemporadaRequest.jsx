import axios from './AxiosConfig';

const baseUrl = process.env.REACT_APP_BACKEND_URL_TEMPORADA;

const CadastrarAltaTemporadaRequest = async (altaTemporada) => {
    try {
        console.log('Cadastrando alta temporada:', altaTemporada);
        const response = await axios.post(`${baseUrl}/AltaTemporada`, altaTemporada, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar alta temporada:', error);
        throw error;
    }
};

export default CadastrarAltaTemporadaRequest;
