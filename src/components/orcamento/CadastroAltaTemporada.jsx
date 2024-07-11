import React, { Component } from 'react';
import Main from '../templates/Main';
import CadastroAltaTemporadaForm from './forms/CadastroAltaTemporadaForm';
import CadastrarAltaTemporadaRequest from '../services/CadastrarAltaTemporadaRequest';
import { ObterDatasAltaTemporadaRequest } from '../services/ConsultarAltaTemporadaRequest';
import { ExcluirDataAltaTemporadaRequest } from '../services/ExcluirDataAltaTemporadaRequest';
import TabelaAltaTemporada from './retornoOrcamento/TabelaAltaTemporada';

const headerProps = {
    icon: 'calendar',
    title: 'Cadastro Alta Temporada',
    subtitle: 'Cadastrar período de alta temporada'
}

export default class CadastroAltaTemporada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensagem: '',
            datasAltaTemporada: []
        };
    }

    componentDidMount() {
        this.buscarDatasAltaTemporada();
    }

    buscarDatasAltaTemporada = async () => {
        try {
            const datasAltaTemporada = await ObterDatasAltaTemporadaRequest();
            this.setState({ datasAltaTemporada });
        } catch (error) {
            console.error('Erro ao buscar datas de alta temporada:', error);
        }
    };

    cadastrarAltaTemporada = async (altaTemporada) => {
        try {
            await CadastrarAltaTemporadaRequest(altaTemporada);
            this.setState({ mensagem: 'Alta temporada cadastrada com sucesso.' });
            this.buscarDatasAltaTemporada();
        } catch (error) {
            console.error('Erro ao cadastrar alta temporada:', error);
            this.setState({ mensagem: 'Erro ao cadastrar alta temporada.' });
        }
    };

    excluirDataAltaTemporada = async (id) => {
        try {
            await ExcluirDataAltaTemporadaRequest(id);
            this.setState({ mensagem: 'Data de alta temporada excluída com sucesso.' });
            this.buscarDatasAltaTemporada();
        } catch (error) {
            console.error('Erro ao excluir data de alta temporada:', error);
            this.setState({ mensagem: 'Erro ao excluir data de alta temporada.' });
        }
    };

    render() {
        const { mensagem, datasAltaTemporada } = this.state;

        return (
            <Main {...headerProps}>
                <CadastroAltaTemporadaForm cadastrarAltaTemporada={this.cadastrarAltaTemporada} />
                {mensagem && <div className="alert alert-info">{mensagem}</div>}
                <TabelaAltaTemporada dados={datasAltaTemporada} excluirData={this.excluirDataAltaTemporada} />
            </Main>
        );
    }
}