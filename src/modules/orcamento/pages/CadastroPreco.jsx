import React, { Component } from 'react';
import Main from '../../../components/Main';
import CadastroPrecoForm from '../components/forms/CadastroPrecoForm';
import CadastrarPrecoRequest from '../../../services/CadastrarPrecoRequest';
import ConsultarPrecosRequest from '../../../services/ConsultarPrecosRequest';
import AtualizarPrecoRequest from '../../../services/AtualizarPrecoRequest';
import ExcluirPrecoRequest from '../../../services/ExcluirPrecoRequest';
import TabelaPrecos from '../components/results/TabelaPrecos';

const headerProps = {
    icon: 'dollar-sign',
    title: 'Cadastro de Preços',
    subtitle: 'Cadastrar preços de temporada'
};

export default class CadastroPreco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mensagem: '',
            precos: [],
            precoEditando: null
        };
    }

    componentDidMount() {
        this.buscarPrecos();
    }

    buscarPrecos = async () => {
        try {
            const precos = await ConsultarPrecosRequest();
            console.log('Preços obtidos:', precos);
            this.setState({ precos });
        } catch (error) {
            console.error('Erro ao buscar preços:', error);
        }
    };

    cadastrarPreco = async (preco) => {
        try {
            await CadastrarPrecoRequest(preco);
            this.setState({ mensagem: 'Preço cadastrado com sucesso.' });
            this.buscarPrecos();
        } catch (error) {
            console.error('Erro ao cadastrar preço:', error);
            this.setState({ mensagem: 'Erro ao cadastrar preço.' });
        }
    };

    atualizarPreco = async (id, preco) => {
        try {
            await AtualizarPrecoRequest(id, preco);
            this.setState({ mensagem: 'Preço atualizado com sucesso.' });
            this.buscarPrecos();
        } catch (error) {
            console.error('Erro ao atualizar preço:', error);
            this.setState({ mensagem: 'Erro ao atualizar preço.' });
        }
    };

    excluirPreco = async (id) => {
        try {
            await ExcluirPrecoRequest(id);
            this.setState({ mensagem: 'Preço excluído com sucesso.' });
            this.buscarPrecos();
        } catch (error) {
            console.error('Erro ao excluir preço:', error);
            this.setState({ mensagem: 'Erro ao excluir preço.' });
        }
    };

    editarPreco = (preco) => {
        this.setState({ precoEditando: preco });
    };

    render() {
        const { mensagem, precos, precoEditando } = this.state;

        return (
            <Main {...headerProps}>
                <CadastroPrecoForm cadastrarPreco={this.cadastrarPreco} precoEditando={precoEditando} atualizarPreco={this.atualizarPreco} />
                {mensagem && <div className="alert alert-info">{mensagem}</div>}
                <TabelaPrecos dados={precos} editarPreco={this.editarPreco} excluirPreco={this.excluirPreco} />
            </Main>
        );
    }
}