import React, { useState } from 'react';

const EditarDesconto = ({ orcamento, updateFieldDesconto }) => {
    const [editedDesconto, setEditedDesconto] = useState(orcamento);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedDesconto({
        ...editedDesconto,
        [name]: value
      });
      updateFieldDesconto({ [name]: value });
    };
    return (
        <div className="form-group row">
            <div className="col-md-2">
                <label htmlFor="desconto">Desconto:</label>
                <input 
                    type="number" 
                    id="desconto"
                    name="desconto"  
                    className="form-control" 
                    value={editedDesconto.desconto} 
                    onChange={handleChange}
                />
            </div>
            <div className="col-md-2">
                <label htmlFor="tipoDesconto">Tipo de Desconto:</label>
                <select 
                    id="tipoDesconto"
                    name="tipoDesconto"  
                    className="form-control" 
                    value={editedDesconto.tipoDesconto} 
                    onChange={handleChange}
                >
                    <option value={1}>Porcentagem</option>
                    <option value={2}>Valor em Reais</option>
                </select>
            </div>
        </div>
    );
}

export default EditarDesconto;