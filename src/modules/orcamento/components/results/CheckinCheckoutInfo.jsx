import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatDate } from '../../../../utils/formatDate';

const CheckinCheckoutInfo = ({ orcamento }) => {
  console.log("Orçamento recebido:", orcamento);
  return (
    <Row>
      <Col md={12}>
        <Row>
          <Col md={3}>
            <h5>Data de Entrada</h5>
            <p>{formatDate(orcamento.dataEntrada)}</p>
          </Col>
          <Col md={3}>
            <h5>Horário de Entrada</h5>
            <p>{orcamento.horarioEntrada}</p>
          </Col>
          <Col md={3}>
            <h5>Data de Saída</h5>
            <p>{formatDate(orcamento.dataSaida)}</p>
          </Col>
          <Col md={3}>
            <h5>Horário de Saída</h5>
            <p>{orcamento.horarioSaida}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CheckinCheckoutInfo;