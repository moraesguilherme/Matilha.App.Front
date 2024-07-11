import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CaesInfo = ({ caoOrcamento }) => {
  return (
    <Row>
      {caoOrcamento.map((cao, index) => (
        <Col md={12} key={index}>
          <hr></hr>
          <div>
            <Row>
              <Col md={2}>
                <h5>Nome do Cão</h5>
                <p>{cao.nomeCachorro}</p>
              </Col>
              <Col md={2}>
                <h5>Raça</h5>
                <p>{cao.raca}</p>
              </Col>
              <Col md={2}>
                <h5>Idade</h5>
                <p>{cao.idade}</p>
              </Col>
              <Col md={2}>
                <h5>Sexo</h5>
                <p>{cao.sexo}</p>
              </Col>
              <Col md={2}>
                <h5>Castrado</h5>
                <p>{cao.castrado ? 'Sim' : 'Não'}</p>
              </Col>
              <Col md={2}>
                <h5>Peso</h5>
                <p>{cao.peso}</p>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CaesInfo;