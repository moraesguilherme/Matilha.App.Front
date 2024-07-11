import React, { Component } from 'react';
import Main from '../components/Main';
import ConsultarOrcamentoForm from './forms/ConsultarOrcamentoForm';
import EditarOrcamento from './updateOrcamento/EditarOrcamento';
import ConsultarOrcamentoPorNumeroProposta from '../services/ConsultarOrcamentoRequest';

const headerProps = {
    icon: 'search',
    title: 'Consultar Orçamento',
    subtitle: 'Consultar Orçamento por Número de Proposta'
}

export default class ConsultarOrcamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orcamento: null
        };
    }

    consultarOrcamento = async (numeroProposta) => {
        try {
            const orcamentoConsultado = await ConsultarOrcamentoPorNumeroProposta(numeroProposta);
            this.setState({ orcamento: orcamentoConsultado });
        } catch (error) {
            console.error('Erro ao consultar orçamento:', error);
        }
    };

    atualizarOrcamento = (orcamentoAtualizado) => {
        this.setState({ orcamento: orcamentoAtualizado });
    };

    render() {
        const { orcamento } = this.state;

        return (
            <Main {...headerProps}>
                <ConsultarOrcamentoForm consultarOrcamento={this.consultarOrcamento} />
                {orcamento && <EditarOrcamento orcamento={orcamento} atualizarOrcamento={this.atualizarOrcamento} />}
            </Main>
        );
    }
}