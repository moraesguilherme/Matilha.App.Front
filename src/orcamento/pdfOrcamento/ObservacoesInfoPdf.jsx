import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

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
  text: {
    fontSize: 10,
    marginLeft: 5,
  },
});

const ObservacoesInfoPdf = ({ orcamento }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Observações</Text>
      <View>
        <Text style={styles.text}>{orcamento.observacoes}</Text>
      </View>
    </View>
  );
};

export default ObservacoesInfoPdf;
