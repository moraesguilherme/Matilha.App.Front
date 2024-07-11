import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatDate } from '../../../../utils/formatDate';

const getStatusDescription = (status) => {
  switch (status) {
    case 1:
      return 'Análise';
    case 2:
      return 'Aprovada';
    case 3:
      return 'Expirada';
    default:
      return 'Desconhecido';
  }
};

const PropostaInfo = ({ proposta }) => {
  const statusDescription = getStatusDescription(proposta.statusProposta);

  return (
    <Row>
      <Col md={3}>
        <h5>Número da Proposta</h5>
        <p>{proposta.numeroProposta}</p>
      </Col>
      <Col md={3}>
        <h5>Data da Proposta</h5>
        <p>{formatDate(proposta.dataProposta)}</p>
      </Col>
      <Col md={3}>
        <h5>Status da Proposta</h5>
        <p>{statusDescription}</p>
      </Col>
      <Col md={3}>
        <h5>Data de Expiração</h5>
        <p>{formatDate(proposta.dataExpiracao)}</p>
      </Col>
    </Row>
  );
};

export default PropostaInfo;
