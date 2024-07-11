import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatDate } from '../../../../utils/formatDate';
import getTemporadaNome from '../../../../utils/Temporada';


const PeriodoInfo = ({ orcamento }) => {
  return (
    <Row>
      <Col md={6}>
        <h5>Datas:</h5>
        <hr />
        {orcamento.periodoReserva.periodo.map((dia, index) => (
          <div key={index}>
            <p>
              {dia.diaDaSemana}: {formatDate(dia.dataReserva)} 
              {dia.feriado && <span style={{ color: 'red' }}> *Feriado</span>}
            </p>
            <p>Valor Diária: R$ {dia.valorDiaria.toFixed(2)}</p>
            <p>Temporada: {getTemporadaNome(dia.temporadaId)}</p>
            {index < orcamento.periodoReserva.periodo.length - 1 && <hr />}
          </div>
        ))}
      </Col>
      <Col md={6}>
        <h5>Detalhes:</h5>
        <hr />
        <p>Quantidade Total de Dias: {orcamento.periodoReserva.qtdTotalDeDias}</p>
        <hr />
        <p>Quantidade de Dias de Semana: {orcamento.periodoReserva.qtdDiasDeSemana}</p>
        <hr />
        <p>Quantidade de Finais de Semana: {orcamento.periodoReserva.qtdFinaisDeSemana}</p>
        <hr />
        <p>Quantidade de Feriados: {orcamento.periodoReserva.qtdFeriados}</p>
      </Col>
    </Row>
  );
};

export default PeriodoInfo;
