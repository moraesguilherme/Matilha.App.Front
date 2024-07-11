import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 12,
  },
  itemContainer: {
    marginBottom: 10,
  },
//   text: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
  text: {
    fontSize: 10,
    marginLeft: 5,
  },
});

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

const ValoresInfoPdf = ({ orcamento }) => {
  const tipoDescontoDescription = getDescriptionFromType(orcamento.tipoDesconto);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valores</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Valor Unitário por Cão: R${orcamento.valorHospedageUnitarioPorCao}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Subtotal: R${orcamento.subtotal}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Desconto: {orcamento.desconto} {tipoDescontoDescription}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Valor Total de Descontos: R${orcamento.valorTotalDescontos}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Valor Final: R${orcamento.valorFinal}</Text>
      </View>
    </View>
  );
};

export default ValoresInfoPdf;