import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 5,
    border: '1px solid #ccc',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 11,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  text: {
    fontSize: 9,
    marginLeft: 5,
    flexGrow: 1,
  },
  textField: {
    fontSize: 10,
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'red'
  },
});

const CaesInfoPdf = ({ caoOrcamento }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cachorros</Text>
      {caoOrcamento.map((cao, index) => (
        <View key={index} style={styles.info}>
          <View>
            <Text style={styles.textField}>Nome:</Text>
            <Text style={styles.text}>{cao.nomeCachorro}</Text>
          </View>
          <View>
            <Text style={styles.textField}>Raça:</Text>
            <Text style={styles.text}>{cao.raca}</Text>
          </View>
          <View>
            <Text style={styles.textField}>Idade:</Text>
            <Text style={styles.text}>{cao.idade}</Text>
          </View>
          <View>
            <Text style={styles.textField}>Sexo:</Text>
            <Text style={styles.text}>{cao.sexo}</Text>
          </View>
          <View>
            <Text style={styles.textField}>Castrado:</Text>
            <Text style={styles.text}>{cao.castrado ? 'Sim' : 'Não'}</Text>
          </View>
          <View>
            <Text style={styles.textField}>Peso:</Text>
            <Text style={styles.text}>{cao.peso}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CaesInfoPdf;
