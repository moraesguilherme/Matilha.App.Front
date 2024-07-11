import React from 'react';
import CurrencyInput from 'react-currency-input-field';

const Servicos = ({ servicos, updateField: updateFieldServicos }) => {
  const { avaliacao, qtdAvaliacoes, valorAvaliacao, adaptacao, qtdAdaptacao, valorAdaptacao, utilizaTaxi, qtdTaxi, valorTaxi } = servicos;

  return (
    <div className="servicos">
      {/* <h4>Serviços</h4> */}
      <div className="row">
        {/* Avaliação */}
        <div className="col-12 col-md-3">
          <div className="form-group">
            <div className="form-check">
              <label htmlFor="avaliacao" className="form-check-label">Realiza Avaliacao</label>
              <input 
                type="checkbox" 
                id="avaliacao"
                name='avaliacao' 
                className="form-check-input" 
                checked={avaliacao} 
                value={avaliacao}
                onChange={(e) => updateFieldServicos(e.target.name, !avaliacao)} 
              />
            </div>
          </div>
        </div>
      </div>

      {avaliacao && (
        <div className="row">
          {/* Quantidade de Avaliações */}
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="qtdAvaliacoes">Qtd Avaliações:</label>
              <input 
                type="number" 
                id="qtdAvaliacoes"
                name='qtdAvaliacoes' 
                className="form-control" 
                value={qtdAvaliacoes} 
                onChange={(e) => updateFieldServicos(e.target.name, parseInt(e.target.value))} 
              />
            </div>
          </div>
          {/* Valor da Avaliação */}
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="valorAvaliacao">Valor Avaliação:</label>
              <CurrencyInput
                id="valorAvaliacao"
                name="valorAvaliacao"
                className="form-control"
                value={valorAvaliacao}
                onValueChange={(value) => updateFieldServicos('valorAvaliacao', value)}
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
              />
            </div>
          </div>
        </div>
      )}

      <div className="row">
        {/* Adaptacao */}
        <div className="col-12 col-md-3">
          <div className="form-group">
            <div className="form-check">
              <input 
                type="checkbox" 
                id="adaptacao"
                name="adaptacao"  
                className="form-check-input" 
                checked={adaptacao} 
                onChange={(e) => updateFieldServicos(e.target.name, !adaptacao)} 
              />
              <label htmlFor="adaptacao" className="form-check-label">Realiza Adaptacão</label>
            </div>
          </div>
        </div>
      </div>

      {adaptacao && (
        <div className="row">
          {/* Quantidade de Adaptação */}
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="qtdAdaptacao">Qtd Adaptação:</label>
              <input 
                type="number" 
                id="qtdAdaptacao" 
                name="qtdAdaptacao" 
                className="form-control" 
                value={qtdAdaptacao} 
                onChange={(e) => updateFieldServicos(e.target.name, parseInt(e.target.value))} 
              />
            </div>
          </div>
          {/* Valor da Adaptação */}
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="valorAdaptacao">Valor Adaptação:</label>
              <CurrencyInput
                id="valorAdaptacao"
                name="valorAdaptacao"
                className="form-control"
                value={valorAdaptacao}
                onValueChange={(value) => updateFieldServicos('valorAdaptacao', value)}
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
              />
            </div>
          </div>
        </div>
      )}

      {/* Utiliza Táxi */}
      <div className="row">
        <div className="col-12 col-md-2">
          <div className="form-group">
            <div className="form-check">
              <input 
                type="checkbox" 
                id="utilizaTaxi" 
                name="utilizaTaxi" 
                className="form-check-input" 
                checked={utilizaTaxi} 
                onChange={(e) => updateFieldServicos(e.target.name, !utilizaTaxi)} 
              />
              <label htmlFor="utilizaTaxi" className="form-check-label">Utiliza Táxi</label>
            </div>
          </div>
        </div>
      </div>

      {/* Detalhes do Táxi */}
      {utilizaTaxi && (
        <div className="row">
          {/* Quantidade de Táxi */}
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="qtdTaxi">Qtd Táxi:</label>
              <input 
                type="number" 
                id="qtdTaxi" 
                name="qtdTaxi" 
                className="form-control" 
                value={qtdTaxi} 
                onChange={(e) => updateFieldServicos(e.target.name, parseInt(e.target.value))} 
              />
            </div>
          </div>
          {/* Valor Unitário do Táxi */}
          <div className="col-12 col-md-2">
            <div className="form-group">
              <label htmlFor="valorTaxi">Valor Unitário:</label>
              <CurrencyInput
                id="valorTaxi"
                name="valorTaxi"
                className="form-control"
                value={valorTaxi}
                onValueChange={(value) => updateFieldServicos('valorTaxi', value)}
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Servicos;
