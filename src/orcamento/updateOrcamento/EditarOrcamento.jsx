import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDetalhesOrcamento from '../pdfOrcamento/PDFDetalhesOrcamento';
import PropostaInfo from '../retornoOrcamento/PropostaInfo';
import ClienteInfo from '../retornoOrcamento/ClienteInfo';
import CaoOrcamento from '../forms/CaoOrcamento';
import CaesInfo from '../retornoOrcamento/CaesInfo';
import CheckinCheckoutInfo from '../retornoOrcamento/CheckinCheckoutInfo';
import EditarCheckinCheckout from './EditarCheckinCheckout';
import PeriodoInfo from '../retornoOrcamento/PeriodoInfo';
import ServicosInfo from '../retornoOrcamento/ServicosInfo';
import EditarServicos from './EditarServicos';
import ObservacoesInfo from '../retornoOrcamento/ObservacoesInfo';
import ValoresInfo from '../retornoOrcamento/ValoresInfo';
import Observacoes from '../forms/Obeservacoes';
import EditarDesconto from './EditarDesconto';
import MontaAtualizacaoOrcamentoRequest from '../../services/MontaAtualizacaoOrcamentoRequest';

const EditarOrcamento = ({ orcamento, atualizarOrcamento }) => {
    const [editedOrcamento, setEditedOrcamento] = useState(orcamento);
    const [editMode, setEditMode] = useState(false);
  
    useEffect(() => {
        if (!editMode) {
          setEditedOrcamento(orcamento);
        }
    }, [orcamento, editMode]);

    const toggleEditMode = () => {
      console.log('Modo de edição:', !editMode);
      if (!editMode) {
        console.log('Copiando orcamento para editedOrcamento:', { ...orcamento });
        setEditedOrcamento({...orcamento});
      }
      console.log('Toggled edit mode');
      setEditMode(!editMode);
    };
  
    const handleCaoChange = (updatedCaes) => {
      setEditedOrcamento({
        ...editedOrcamento,
        cliente: {
          ...editedOrcamento.cliente,
          caoOrcamento: updatedCaes
        }
      });
    };
    
    const handleCheckinCheckoutUpdate = (updatedCheckinCheckout) => {
      setEditedOrcamento({
        ...editedOrcamento,
        ...updatedCheckinCheckout
      });
    };

    const handleObservacoesUpdate = (observacoes) => {
      setEditedOrcamento({
        ...editedOrcamento,
        observacoes: observacoes
      });
    };

    const handleServicosUpdate = (updatedServicos) => {
      setEditedOrcamento({
        ...editedOrcamento,
        ...updatedServicos
      });
    };

    const handleDescontoUpdate = (updatedDesconto) => {
      setEditedOrcamento({
        ...editedOrcamento,
        ...updatedDesconto
      });
    };

    const handleSalvar = async () => {
      console.log('Salvando edição:', editedOrcamento);
      try {
          const response = await MontaAtualizacaoOrcamentoRequest(orcamento.id, editedOrcamento);
          console.log('Orçamento atualizado com sucesso:', response);

          setEditedOrcamento(response);
          atualizarOrcamento(response);
          setEditMode(false);
      } catch (error) {
          console.error('Erro ao atualizar o orçamento:', error);
      }
  };
  
  
    return (
      <div className="container detalhes-orcamento">
        <h2 className="detalhes-titulo">Editar Detalhes do Orçamento</h2>
        <div className="detalhes-conteudo">
          <PropostaInfo proposta={editedOrcamento} />
          <h4 className="detalhes-titulo">Cliente</h4>
          <ClienteInfo cliente={editedOrcamento.cliente} />
          <h4 className="detalhes-titulo">Cachorro</h4>
          {editMode ? (
            <CaoOrcamento caes={editedOrcamento.cliente.caoOrcamento} updateFieldCao={handleCaoChange} />
          ) : (
            <CaesInfo caoOrcamento={editedOrcamento.cliente.caoOrcamento} />
          )}
          <h4 className="detalhes-titulo">Checkin/Checkout</h4>
          {editMode ? (
            <EditarCheckinCheckout orcamento={editedOrcamento} updateCheckinCheckout={handleCheckinCheckoutUpdate} />
          ) : (
            <CheckinCheckoutInfo orcamento={editedOrcamento} />
          )}
          <h4 className="detalhes-titulo">Observações</h4>
          {editMode ? (
            <Observacoes observacoes={editedOrcamento.observacoes} setObservacoes={handleObservacoesUpdate}
          />
          ): (
            <ObservacoesInfo orcamento={editedOrcamento} />
          )}
          <h4 className="detalhes-titulo">Período da Reserva</h4>
          <PeriodoInfo orcamento={editedOrcamento} />
          <h4 className="detalhes-titulo">Serviços</h4>
          {editMode ? (
            <EditarServicos orcamento={editedOrcamento} updateServicos={handleServicosUpdate} />
          ) : (
            <ServicosInfo orcamento={editedOrcamento} />
          )}
          <h4 className="detalhes-titulo">Valores</h4>
          {editMode ? (
            <EditarDesconto orcamento={editedOrcamento} updateFieldDesconto={handleDescontoUpdate} />
          ) : (
            <ValoresInfo orcamento={editedOrcamento} />
          )}
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button onClick={toggleEditMode}>{editMode ? "Cancelar" : "Editar"}</button>
              {!editMode && (
                <PDFDownloadLink
                  document={<PDFDetalhesOrcamento orcamento={editedOrcamento} />}
                  fileName="detalhes_orcamento.pdf"
                >
                  {({ loading }) =>
                    loading ? 'Carregando documento...' : 'Baixar PDF'
                  }
                </PDFDownloadLink>
              )}
              {editMode && (
                <button onClick={handleSalvar}>Salvar</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EditarOrcamento;