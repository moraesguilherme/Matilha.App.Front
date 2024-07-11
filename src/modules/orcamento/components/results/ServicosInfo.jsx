import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ServicosInfo = ({ orcamento }) => {
  return (
    <div>
      <Row>
        <h5>Avaliação</h5>
        <Col md={4}>
          <p>Quantidade Avaliações: {orcamento.qtdAvaliacao}</p>
        </Col>
        <Col md={4}>
          <p>Valor Unitário Avaliação: R${orcamento.valorUnitarioAvaliacao}</p>
        </Col>
        <Col md={4}>
          <p>Valor Total da Avaliação: R${orcamento.valorTotalAvaliacao}</p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <h5>Adaptação</h5>
        <Col md={4}>
          <p>Quantidade de Adaptações: {orcamento.qtdAdaptacao}</p>
        </Col>
        <Col md={4}>
          <p>Valor Unitário da Adaptação: R${orcamento.valorUnitarioAdaptacao}</p>
        </Col>
        <Col md={4}>
          <p>Valor Total da Adaptação: R${orcamento.valorTotalAdaptacao}</p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <h5>Táxi</h5>
        <Col md={4}>
          <p>Quantidade de Táxis: {orcamento.qtdTaxi}</p>
        </Col>
        <Col m={4}>
          <p>Valor da Viagem de Taxi: R${orcamento.valorViagemTaxi}</p>
        </Col>
        <Col md={4}>
          <p>Valor Total do Taxi: R${orcamento.valorTotalTaxi}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ServicosInfo;
