import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { formatDate } from '../../../../utils/formatDate';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 5,
    border: '1px solid #ccc',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 9,
    marginLeft: 5,
  },
  textField: {
    fontSize: 10,
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'red' // Adicionando negrito ao textField
  },
});

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

const PropostaInfoPdf = ({ proposta }) => {
  const statusDescription = getStatusDescription(proposta.statusProposta);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textField}>Número da Proposta: </Text>
        <Text style={styles.text}>{proposta.numeroProposta}</Text>
      </View>
      <View>
        <Text style={styles.textField}>Data da Proposta: </Text>
        <Text style={styles.text}>{formatDate(proposta.dataProposta)}</Text>
      </View>
      <View>
        <Text style={styles.textField}>Status da Proposta: </Text>
        <Text style={styles.text}>{statusDescription}</Text>
      </View>
      <View>
        <Text style={styles.textField}>Data de Expiração: </Text>
        <Text style={styles.text}>{formatDate(proposta.dataExpiracao)}</Text>
      </View>
    </View>
  );
};

export default PropostaInfoPdf;