import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ClienteInfo = ({ cliente }) => {
  return (
    <Row>
      <Col md={4}>
        <h5>Nome do Cliente</h5>
        <p>{cliente.nomeCliente}</p>
      </Col>
      <Col md={4}>
        <h5>Email do Cliente</h5>
        <p>{cliente.email}</p>
      </Col>
      <Col md={4}>
        <h5>Telefone do Cliente</h5>
        <p>{cliente.telefoneCliente}</p>
      </Col>
    </Row>
  );
};

export default ClienteInfo;