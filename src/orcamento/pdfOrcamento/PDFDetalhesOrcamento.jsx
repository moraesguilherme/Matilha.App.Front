import React from 'react';
import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import PropostaInfoPdf from './PropostaInfoPdf';
import ClienteInfoPdf from './ClienteInfoPdf';
import CaesInfoPdf from './CaesInfoPdf';
import CheckinCheckoutInfoPdf from './CheckinCheckoutInfoPdf';
import PeriodoInfoPdf from './PeriodoInfoPdf';
import ServicosInfoPdf from './ServicosInfoPdf';
import ObservacoesInfoPdf from './ObservacoesInfoPdf';
import ValoresInfoPdf from './ValoresInfoPdf';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 20,
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gap: 20,
  },
  contentItem: {
    border: '1px solid #ccc',
    borderRadius: 8,
    padding: 20,
  },
  contentTitle: {
    textAlign: 'center',
    marginBottom: 10,
  },
  contentText: {
    marginBottom: 10,
  },
});

const PDFDetalhesOrcamento = ({ orcamento }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <PropostaInfoPdf proposta={orcamento} />
          <ClienteInfoPdf cliente={orcamento.cliente} />
          <CaesInfoPdf caoOrcamento={orcamento.cliente.caoOrcamento} />
          <CheckinCheckoutInfoPdf orcamento={orcamento} />
          <ServicosInfoPdf orcamento={orcamento} />
          <ObservacoesInfoPdf orcamento={orcamento} />
          <PeriodoInfoPdf orcamento={orcamento} />
          <ValoresInfoPdf orcamento={orcamento} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFDetalhesOrcamento;
