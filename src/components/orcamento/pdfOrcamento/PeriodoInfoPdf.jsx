import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { formatDate } from '../../utils/formatDate';
import getTemporadaNome from '../../utils/Temporada';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
    flexDirection: 'column',
    height: 'auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 12,
  },
  item: {
    marginBottom: 10,
    flexDirection: 'row', // Organiza os itens na horizontal
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
  },
  text: {
    fontSize: 10,
    marginLeft: 5,
  },
});

const PeriodoInfoPdf = ({ orcamento }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Período da Reserva</Text>
      <View style={styles.item}>
        <View>
          <Text style={styles.text}>Datas:</Text>
          {orcamento.periodoReserva.periodo.map((dia, index) => (
            <View key={index}>
              <Text style={styles.text}>
                {dia.diaDaSemana}: {formatDate(dia.dataReserva)}
                {dia.feriado && <Text style={{ color: 'red', fontSize: 10 }}> *Feriado</Text>}
              </Text>
              <Text style={styles.text}>Valor Diária: R$ {dia.valorDiaria.toFixed(2)}</Text>
              <Text style={styles.text}>Temporada: {getTemporadaNome(dia.temporadaId)}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text style={styles.text}>Qtd Dias:</Text>
          <Text style={styles.text}>Qtd Total de Dias: {orcamento.periodoReserva.qtdTotalDeDias}</Text>
          <Text style={styles.text}>Qtd de Dias de Semana: {orcamento.periodoReserva.qtdDiasDeSemana}</Text>
          <Text style={styles.text}>Qtd de Finais de Semana: {orcamento.periodoReserva.qtdFinaisDeSemana}</Text>
          <Text style={styles.text}>Qtd de Feriados: {orcamento.periodoReserva.qtdFeriados}</Text>
        </View>
      </View>
    </View>
  );
};

export default PeriodoInfoPdf;
