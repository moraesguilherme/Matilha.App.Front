import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getDescriptionFromType = (type) => {
  switch (type) {
    case 1:
      return '%';
    case 2:
      return 'R$';
    default:
      return 'Desconhecido';
  }
};

const ValoresInfo = ({ orcamento }) => {
  const tipoDescontoDescription = getDescriptionFromType(orcamento.tipoDesconto);

  return (
    <Row>
      <Col md={12}>
        <p>Valor Unitário da Hospedagem por Cão: R${orcamento.valorHospedageUnitarioPorCao}</p>
        <hr></hr>
        <p>Subtotal: R${orcamento.subtotal}</p>
        <hr></hr>
        <p>Desconto: {orcamento.desconto} {tipoDescontoDescription}</p>
        <hr></hr>
        <p>Valor Total de Descontos: R${orcamento.valorTotalDescontos}</p>
        <hr></hr>
        <p>Valor Final: R${orcamento.valorFinal}</p>
      </Col>
    </Row>
  );
};

export default ValoresInfo;
