import React from 'react';
import BuscarClientePorTelefone from './BuscarClientePorTelefone';

const ClienteOrcamento = ({ cliente, updateField: updateFieldCliente, updateFieldCao }) => {
    return (
        <div className="cliente-orcamento">
            <div className="row">
                <div className="col-12 col-md-3">
                    <BuscarClientePorTelefone updateFieldCliente={updateFieldCliente} updateFieldCao={updateFieldCao} />
                </div>
                <div className="col-12 col-md-4">
                    <div className="form-group">
                        <label>Nome Cliente</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={cliente.name} 
                            onChange={(e) => updateFieldCliente(e.target.name, e.target.value)} 
                            placeholder="Digite o nome do cliente..." 
                        />
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="email" 
                            value={cliente.email} 
                            onChange={(e) => updateFieldCliente(e.target.name, e.target.value)} 
                            placeholder="Digite o email..." 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClienteOrcamento;
