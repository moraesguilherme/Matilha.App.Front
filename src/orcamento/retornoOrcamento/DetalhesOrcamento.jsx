import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDetalhesOrcamento from '../pdfOrcamento/PDFDetalhesOrcamento';
import PropostaInfo from './PropostaInfo';
import ClienteInfo from './ClienteInfo';
import CaesInfo from './CaesInfo';
import CheckinCheckoutInfo from './CheckinCheckoutInfo';
import PeriodoInfo from './PeriodoInfo';
import ServicosInfo from './ServicosInfo';
import ObservacoesInfo from './ObservacoesInfo';
import ValoresInfo from './ValoresInfo';
import '../../styles/DetalhesOrcamento.css';

const DetalhesOrcamento = ({ orcamento }) => {
  return (
    <div className="container detalhes-orcamento">
      <h2 className="detalhes-titulo">Detalhes do Orçamento</h2>
      <div className="detalhes-conteudo">
        <PropostaInfo proposta={orcamento} />
        <h4 className="detalhes-titulo">Cliente</h4>
        <ClienteInfo cliente={orcamento.cliente} />
        <h4 className="detalhes-titulo">Cachorro</h4>
        <CaesInfo caoOrcamento={orcamento.cliente.caoOrcamento} />
        <h4 className="detalhes-titulo">Checkin/Checkout</h4>
        <CheckinCheckoutInfo orcamento={orcamento} />
        <h4 className="detalhes-titulo">Observações</h4>
        <ObservacoesInfo orcamento={orcamento} />
        <h4 className="detalhes-titulo">Período da Reserva</h4>
        <PeriodoInfo orcamento={orcamento} />
        <h4 className="detalhes-titulo">Serviços</h4>
        <ServicosInfo orcamento={orcamento} />
        <h4 className="detalhes-titulo">Valores</h4>
        <ValoresInfo orcamento={orcamento} />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <PDFDownloadLink
              document={<PDFDetalhesOrcamento orcamento={orcamento} />}
              fileName="detalhes_orcamento.pdf"
            >
              {({ loading }) =>
                loading ? 'Carregando documento...' : 'Baixar PDF'
              }
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesOrcamento;