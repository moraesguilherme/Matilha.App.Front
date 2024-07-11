import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ObservacoesInfo = ({ orcamento }) => {
  return (
    <Row>
      <Col md={12}>
        <p>{orcamento.observacoes}</p>
      </Col>
    </Row>
  );
};

export default ObservacoesInfo;