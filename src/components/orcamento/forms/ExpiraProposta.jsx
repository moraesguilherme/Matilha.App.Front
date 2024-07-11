import React from 'react';

const ExpiraProposta = ({ dataExpiracao, setExpiraProposta }) => {
    return (
        <div className="form-group row">
            <div className="div col-md-3">
                <label htmlFor="dataExpiracaoProposta">Proposta válida até:</label>
                <input 
                    type="date" 
                    id="dataExpiracao"
                    name="dataExpiracao"  
                    className="form-control" 
                    value={dataExpiracao} 
                    onChange={(e) => setExpiraProposta(e.target.value)} 
                />
            </div>
        </div>
    );
}

export default ExpiraProposta;
