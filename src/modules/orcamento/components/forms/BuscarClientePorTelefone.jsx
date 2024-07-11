import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import ConsultarClientePorTelefoneRequest from '../../../../services/ConsultarClientePorTelefoneRequest';
import '../../styles/BuscarClientePorTelefone.css';

const BuscarClientePorTelefone = ({ updateFieldCliente, updateFieldCao }) => {
    const [searching, setSearching] = useState(false);

    const buscarClientePorTelefone = async (telefone) => {
        setSearching(true);

        try {
            const clientesEncontrados = await ConsultarClientePorTelefoneRequest(telefone);
            console.log('Clientes encontrados:', clientesEncontrados);

            if (clientesEncontrados.length > 0) {
                const clienteEncontrado = clientesEncontrados[0];
                console.log('Cliente do back:', clienteEncontrado);
                updateFieldCliente('name', clienteEncontrado.nomeCliente);
                updateFieldCliente('email', clienteEncontrado.email || '');
                updateFieldCliente('telefone', clienteEncontrado.telefoneCliente);

                if (clienteEncontrado.caoOrcamento && clienteEncontrado.caoOrcamento.length > 0) {
                    const caesEncontrados = clienteEncontrado.caoOrcamento;
                    updateFieldCao(caesEncontrados);
                }
            } else {
                console.log('Nenhum cliente encontrado');
                updateFieldCliente('name', '');
                updateFieldCliente('email', '');
                updateFieldCao([{ 
                    nomeCachorro: '', 
                    raca: '', 
                    idade: '', 
                    peso: '', 
                    sexo: '', 
                    castrado: ''
                }]);
            }
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
        } finally {
            setSearching(false);
        }
    };

    const handleBlur = (value) => {
        buscarClientePorTelefone(value);
    };

    return (
        <div className="form-group phone-input-container">
            <label>Telefone</label>
            <PhoneInput
                inputProps={{
                    name: 'telefone',
                    required: true,
                }}
                country={'br'}
                onChange={(value) => updateFieldCliente('telefone', value)}
                onBlur={(e) => handleBlur(e.target.value)}
                masks={{ br: '.. .....-....' }}
            />
            {searching && <span>Buscando...</span>}
        </div>
    );
}

export default BuscarClientePorTelefone;