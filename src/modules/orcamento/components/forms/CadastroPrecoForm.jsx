import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import CurrencyInput from 'react-currency-input-field';

export default class CadastroPrecoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoTemporada: '',
            valorDiaDeSemana: '',
            valorFinalDeSemana: '',
            valorFeriado: '',
            valorMeioPeriodoSemana: '',
            valorPernoite: '',
            valorMeioPeriodoFimDeSemana: '',
            id: null // Para guardar o ID do preço que está sendo editado
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.precoEditando !== this.props.precoEditando) {
            const precoEditando = this.props.precoEditando || {
                tipoTemporada: '',
                valorDiaDeSemana: '',
                valorFinalDeSemana: '',
                valorFeriado: '',
                valorMeioPeriodoSemana: '',
                valorPernoite: '',
                valorMeioPeriodoFimDeSemana: '',
                id: null
            };
            this.setState({
                tipoTemporada: precoEditando.tipoTemporada || '',
                valorDiaDeSemana: precoEditando.valorDiaDeSemana || '',
                valorFinalDeSemana: precoEditando.valorFinalDeSemana || '',
                valorFeriado: precoEditando.valorFeriado || '',
                valorMeioPeriodoSemana: precoEditando.valorMeioPeriodoSemana || '',
                valorPernoite: precoEditando.valorPernoite || '',
                valorMeioPeriodoFimDeSemana: precoEditando.valorMeioPeriodoFimDeSemana || '',
                id: precoEditando.id || null
            });
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleCurrencyChange = (name, value) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { cadastrarPreco, atualizarPreco } = this.props;
        const state = { ...this.state };

        const keys = [
            'valorDiaDeSemana',
            'valorFinalDeSemana',
            'valorFeriado',
            'valorMeioPeriodoSemana',
            'valorPernoite',
            'valorMeioPeriodoFimDeSemana'
        ];

        keys.forEach(key => {
            state[key] = parseFloat(state[key].replace(/[^0-9,-]+/g, "").replace(",", "."));
        });

        state.temporadaId = state.tipoTemporada === 'Alta' ? 2 : 1;

        if (state.id) {
            atualizarPreco(state.id, state);
        } else {
            cadastrarPreco(state);
        }

        this.setState({
            tipoTemporada: '',
            valorDiaDeSemana: '',
            valorFinalDeSemana: '',
            valorFeriado: '',
            valorMeioPeriodoSemana: '',
            valorPernoite: '',
            valorMeioPeriodoFimDeSemana: '',
            id: null
        });
    };

    render() {
        const {
            tipoTemporada, valorDiaDeSemana, valorFinalDeSemana, valorFeriado,
            valorMeioPeriodoSemana, valorPernoite, valorMeioPeriodoFimDeSemana 
        } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row className="mb-2">
                    <Form.Group as={Col}>
                        <Form.Label>Tipo de Temporada</Form.Label>
                        <Form.Control 
                            as="select"
                            name="tipoTemporada"
                            value={tipoTemporada}
                            onChange={this.handleChange}
                        >
                            <option value="">Selecione</option>
                            <option value="Alta">Alta</option>
                            <option value="Comum">Comum</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Valor Dia de Semana</Form.Label>
                        <CurrencyInput
                            id="valorDiaDeSemana"
                            name="valorDiaDeSemana"
                            className="form-control"
                            value={valorDiaDeSemana}
                            onValueChange={(value) => this.handleCurrencyChange('valorDiaDeSemana', value)}
                            prefix="R$"
                            decimalSeparator=","
                            groupSeparator="."
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Valor Final de Semana</Form.Label>
                        <CurrencyInput
                            id="valorFinalDeSemana"
                            name="valorFinalDeSemana"
                            className="form-control"
                            value={valorFinalDeSemana}
                            onValueChange={(value) => this.handleCurrencyChange('valorFinalDeSemana', value)}
                            prefix="R$"
                            decimalSeparator=","
                            groupSeparator="."
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Valor Feriado</Form.Label>
                        <CurrencyInput
                            id="valorFeriado"
                            name="valorFeriado"
                            className="form-control"
                            value={valorFeriado}
                            onValueChange={(value) => this.handleCurrencyChange('valorFeriado', value)}
                            prefix="R$"
                            decimalSeparator=","
                            groupSeparator="."
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Valor Meio Período Semana</Form.Label>
                        <CurrencyInput
                            id="valorMeioPeriodoSemana"
                            name="valorMeioPeriodoSemana"
                            className="form-control"
                            value={valorMeioPeriodoSemana}
                            onValueChange={(value) => this.handleCurrencyChange('valorMeioPeriodoSemana', value)}
                            prefix="R$"
                            decimalSeparator=","
                            groupSeparator="."
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Valor Pernoite</Form.Label>
                        <CurrencyInput
                            id="valorPernoite"
                            name="valorPernoite"
                            className="form-control"
                            value={valorPernoite}
                            onValueChange={(value) => this.handleCurrencyChange('valorPernoite', value)}
                            prefix="R$"
                            decimalSeparator=","
                            groupSeparator="."
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Valor Meio Período Fim de Semana</Form.Label>
                        <CurrencyInput
                            id="valorMeioPeriodoFimDeSemana"
                            name="valorMeioPeriodoFimDeSemana"
                            className="form-control"
                            value={valorMeioPeriodoFimDeSemana}
                            onValueChange={(value) => this.handleCurrencyChange('valorMeioPeriodoFimDeSemana', value)}
                            prefix="R$"
                            decimalSeparator=","
                            groupSeparator="."
                        />
                    </Form.Group>
                </Row>
                <Button type="submit" variant="primary">{this.state.id ? 'Atualizar Preço' : 'Salvar'}</Button>
            </Form>
        );
    }
}