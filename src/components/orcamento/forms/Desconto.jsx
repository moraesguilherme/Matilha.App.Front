import React from 'react';

const Desconto = ({ desconto, updateField: updateFieldDesconto }) => {
    return (
        <div className="form-group row">
            <div className="col-md-2">
                <label htmlFor="desconto">Desconto:</label>
                <input 
                    type="number" 
                    id="desconto"
                    name="desconto"  
                    className="form-control" 
                    value={desconto.desconto} 
                    onChange={(e) => updateFieldDesconto(e.target.name, parseFloat(e.target.value))} 
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="tipoDesconto">Tipo de Desconto:</label>
                <select 
                    id="tipoDesconto"
                    name="tipoDesconto"  
                    className="form-control" 
                    value={desconto.tipoDesconto} 
                    onChange={(e) => updateFieldDesconto(e.target.name, parseInt(e.target.value))}
                >
                    <option value={1}>Porcentagem</option>
                    <option value={2}>Valor em Reais</option>
                </select>
            </div>
        </div>
    );
}

export default Desconto;