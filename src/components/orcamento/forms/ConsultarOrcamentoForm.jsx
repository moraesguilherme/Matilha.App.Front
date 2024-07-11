import React, { Component } from 'react';

export default class ConsultarOrcamentoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroProposta: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.consultarOrcamento(this.state.numeroProposta);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Digite o número da proposta:
            <input
              type="text"
              value={this.state.numeroProposta}
              onChange={(e) => this.setState({ numeroProposta: e.target.value })}
            />
          </label>
          <button type="submit">Consultar</button>
        </form>
      </div>
    );
  }
}
