import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { formatDate } from '../../../../utils/formatDate';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5, // Reduzindo a margem inferior para espaçamento entre os blocos
    padding: 5,
    border: '1px solid #ccc',
    borderRadius: 8,
    flexDirection: 'column', // Organiza os itens na vertical
    height: 'auto', // Altura ajustada para se adaptar ao conteúdo
  },
  title: {
    textAlign: 'center',
    marginBottom: 5, // Reduzindo a margem inferior do título
    fontSize: 11, // Adicionando tamanho de fonte para o título
  },
  info: {
    flexDirection: 'row', // Organiza os itens na horizontal
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
    marginBottom: 10, // Adiciona margem inferior para separar as informações
  },
  text: {
    fontSize: 9,
    marginLeft: 5, // Adiciona um pequeno espaçamento à esquerda dos textos
    flexGrow: 1, // Ocupa todo o espaço horizontal disponível
  },
  textField: {
    fontSize: 10,
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'red'
  },
});

const CheckinCheckoutInfoPdf = ({ orcamento }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check-in / Check-out</Text>
      <View style={styles.info}>
        <View>
          <Text style={styles.textField}>Data de Entrada:</Text>
          <Text style={styles.text}>{formatDate(orcamento.dataEntrada)}</Text>
        </View>
        <View>
          <Text style={styles.textField}>Data de Saída:</Text>
          <Text style={styles.text}>{formatDate(orcamento.dataSaida)}</Text>
        </View>
        <View>
          <Text style={styles.textField}>Horário de Entrada:</Text>
          <Text style={styles.text}>{orcamento.horarioEntrada}</Text>
        </View>
        <View>
          <Text style={styles.textField}>Horário de Saída:</Text>
          <Text style={styles.text}>{orcamento.horarioSaida}</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckinCheckoutInfoPdf;