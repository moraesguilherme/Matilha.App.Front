import React from 'react';

const CheckinCheckout = ({ periodo = {}, updateField }) => {
  const { dataEntrada = '', horarioEntrada = '', dataSaida = '', horarioSaida = '' } = periodo;

  const handleHorarioChange = (name, value) => {
    const formattedValue = value.slice(0, 8);
    updateField(name, formattedValue);
  };

  return (
    <div className="cliente-orcamento">
      <div className="row">
        <div className="col-12 col-md-2">
          <div className="form-group">
            <label htmlFor="dataEntrada">Data Checkin:</label>
            <input 
              type="date" 
              id="dataEntrada" 
              name='dataEntrada'
              className="form-control" 
              value={dataEntrada} 
              onChange={(e) => updateField('dataEntrada', e.target.value)} 
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="form-group">
            <label htmlFor="horarioEntrada">Horário Checkin:</label>
            <input 
              type="time" 
              id="horarioEntrada"
              name='horarioEntrada' 
              className="form-control" 
              value={horarioEntrada} 
              onChange={(e) => handleHorarioChange('horarioEntrada', e.target.value)} 
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="form-group">
            <label htmlFor="dataSaida">Data Checkout:</label>
            <input 
              type="date" 
              id="dataSaida" 
              name='dataSaida'
              className="form-control" 
              value={dataSaida} 
              onChange={(e) => updateField('dataSaida', e.target.value)} 
            />
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className="form-group">
            <label htmlFor="horarioSaida">Horário Checkout:</label>
            <input 
              type="time" 
              id="horarioSaida" 
              name='horarioSaida'
              className="form-control" 
              value={horarioSaida} 
              onChange={(e) => handleHorarioChange('horarioSaida', e.target.value)} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckinCheckout;