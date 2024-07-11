import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrencyInput from 'react-currency-input-field';

const EditarServicos = ({ orcamento, updateServicos }) => {
  const [editedServicos, setEditedServicos] = useState(orcamento);

  const handleChange = (name, value) => {
    setEditedServicos({
      ...editedServicos,
      [name]: value
    });
    updateServicos({ [name]: value });
  };

  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    return formatter.format(value);
  }

  return (
    <div>
      <Row>
        <h5>Avaliação</h5>
        <Col md={4}>
          <label htmlFor="qtdAvaliacao">Quantidade Avaliação</label>
          <input
            type="number"
            name="qtdAvaliacao"
            value={editedServicos.qtdAvaliacao}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="form-control"
          />
        </Col>
        <Col md={4}>
          <label htmlFor="valorUnitarioAvaliacao">Valor Unitário Avaliação</label>
          <CurrencyInput
            id="valorUnitarioAvaliacao"
            name="valorUnitarioAvaliacao"
            value={editedServicos.valorUnitarioAvaliacao}
            onValueChange={(value) => handleChange('valorUnitarioAvaliacao', value)}
            className="form-control"
            prefix="R$"
            decimalSeparator=","
            groupSeparator="."
          />
        </Col>
        <Col md={4}>
          <label htmlFor="valorTotalAvaliacao">Valor Total Avaliação</label>
          <input
            type="text"
            name="valorTotalAvaliacao"
            value={formatCurrency(editedServicos.valorTotalAvaliacao)}
            className="form-control"
            disabled
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <h5>Adaptação</h5>
        <Col md={4}>
          <label htmlFor="qtdAdaptacao">Quantidade Adaptação</label>
          <input
            type="number"
            name="qtdAdaptacao"
            value={editedServicos.qtdAdaptacao}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="form-control"
          />
        </Col>
        <Col md={4}>
          <label htmlFor="valorUnitarioAdaptacao">Valor Unitário Adaptação</label>
          <CurrencyInput
            id="valorUnitarioAdaptacao"
            name="valorUnitarioAdaptacao"
            value={editedServicos.valorUnitarioAdaptacao}
            onValueChange={(value) => handleChange('valorUnitarioAdaptacao', value)}
            className="form-control"
            prefix="R$"
            decimalSeparator=","
            groupSeparator="."
          />
        </Col>
        <Col md={4}>
          <label htmlFor="valorTotalAdaptacao">Valor Total Adaptação</label>
          <input
            type="text"
            name="valorTotalAdaptacao"
            value={formatCurrency(editedServicos.valorTotalAdaptacao)}
            className="form-control"
            disabled
          />
        </Col>
      </Row>
      <hr />
      <Row>
        <h5>Táxi</h5>
        <Col md={4}>
          <label htmlFor="qtdTaxi">Quantidade de Viagens</label>
          <input
            type="number"
            name="qtdTaxi"
            value={editedServicos.qtdTaxi}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="form-control"
          />
        </Col>
        <Col md={4}>
          <label htmlFor="valorViagemTaxi">Valor Viagem Táxi</label>
          <CurrencyInput
            id="valorViagemTaxi"
            name="valorViagemTaxi"
            value={editedServicos.valorViagemTaxi}
            onValueChange={(value) => handleChange('valorViagemTaxi', value)}
            className="form-control"
            prefix="R$"
            decimalSeparator=","
            groupSeparator="."
          />
        </Col>
        <Col md={4}>
          <label htmlFor="valorTotalTaxi">Valor Total Táxi</label>
          <input
            type="text"
            name="valorTotalTaxi"
            value={formatCurrency(editedServicos.valorTotalTaxi)}
            className="form-control"
            disabled
          />
        </Col>
      </Row>
    </div>
  );
};

export default EditarServicos;
