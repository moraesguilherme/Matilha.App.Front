import React from "react";

const Observacoes = ({observacoes, setObservacoes}) => {
    return (
        <div className="form-group">
        <label htmlFor="observacoes">Observações:</label>
        <textarea 
            id="observacoes" 
            className="form-control" 
            value={observacoes} 
            onChange={(e) => setObservacoes(e.target.value)} 
        />
        </div>
    );
}

export default Observacoes