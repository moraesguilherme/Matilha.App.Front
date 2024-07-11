import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // Reduzindo a margem inferior para espaçamento entre os blocos
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
    flexDirection: 'column', // Organiza os itens na vertical
    height: 'auto', // Altura ajustada para se adaptar ao conteúdo
  },
  title: {
    textAlign: 'center',
    marginBottom: 10, // Reduzindo a margem inferior do título
    fontSize: 12, // Adicionando tamanho de fonte para o título
  },
  item: {
    flexDirection: 'row', // Organiza os itens na horizontal
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
    marginBottom: 10, // Adiciona margem inferior para separar os itens
  },
//   labelText: {
//     fontSize: 10,
//     marginBottom: 5, // Adiciona margem inferior entre o label e o conteúdo
//   },
  text: {
    fontSize: 10,
    marginLeft: 5, // Adiciona um pequeno espaçamento à esquerda dos textos
    flexGrow: 1, // Ocupa todo o espaço horizontal disponível
  },
});

const ServicosInfoPdf = ({ orcamento }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Avaliação:</Text>
        <View style={styles.item}>
          <Text style={styles.text}>Quantidade Avaliações: {orcamento.qtdAvaliacao}</Text>
          <Text style={styles.text}>Valor Unitário Avaliação: R${orcamento.valorUnitarioAvaliacao}</Text>
          <Text style={styles.text}>Valor Total da Avaliação: R${orcamento.valorTotalAvaliacao}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Adaptação:</Text>
        <View style={styles.item}>
          <Text style={styles.text}>Quantidade de Adaptações: {orcamento.qtdAdaptacao}</Text>
          <Text style={styles.text}>Valor Unitário da Adaptação: R${orcamento.valorUnitarioAdaptacao}</Text>
          <Text style={styles.text}>Valor Total da Adaptação: R${orcamento.valorTotalAdaptacao}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Táxi:</Text>
        <View style={styles.item}>
          <Text style={styles.text}>Quantidade de Táxis: {orcamento.qtdTaxi}</Text>
          <Text style={styles.text}>Valor da Viagem de Taxi: R${orcamento.valorViagemTaxi}</Text>
          <Text style={styles.text}>Valor Total do Taxi: R${orcamento.valorTotalTaxi}</Text>
        </View>
      </View>
    </View>
  );
};

export default ServicosInfoPdf;
