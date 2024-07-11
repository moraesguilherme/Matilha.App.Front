import React from 'react';
import AdicionarCachorroButton from './AdicionarCachorroButton';
import RemoverCachorroButton from './RemoverCachorroButton';

const CaoOrcamento = ({ caes, updateFieldCao }) => {
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newValue = name === "castrado" ? value === "true" : value; 
        const updatedCaes = caes.map((cao, idx) => {
            if (index === idx) {
                return { ...cao, [name]: newValue };
            }
            return cao;
        });
        updateFieldCao(updatedCaes);
    };

    const handleAddCao = () => {
        const novoCao = {
            nomeCachorro: '',
            raca: '',
            idade: '',
            peso: '',
            sexo: '',
            castrado: ''
        };
        updateFieldCao([...caes, novoCao]);
    };

    const handleRemoveCao = (idx) => {
        if (caes.length > 1) {
            const updatedCaes = caes.filter((_, index) => index !== idx);
            updateFieldCao(updatedCaes);
        }
    };


    return (
        <div className="form">
            {caes.map((cao, idx) => (
                <div key={idx}>
                    {/* <h4>Cachorro {idx + 1}</h4> */}
                    <div className="row">
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <label htmlFor={`nomeCachorro${idx}`}>Nome cachorro:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Digite o nome'
                                    id={`nomeCachorro${idx}`}
                                    name={`nomeCachorro`}
                                    value={cao.nomeCachorro}
                                    onChange={(e) => handleInputChange(idx, e)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <label htmlFor={`raca${idx}`}>Raça:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Digite a raça'
                                    id={`raca${idx}`}
                                    name={`raca`}
                                    value={cao.raca}
                                    onChange={(e) => handleInputChange(idx, e)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <label htmlFor={`idade${idx}`}>Idade:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Digite a idade do cachorro'
                                    id={`idade${idx}`}
                                    name={`idade`}
                                    value={cao.idade}
                                    onChange={(e) => handleInputChange(idx, e)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <label htmlFor={`peso${idx}`}>Peso:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder='Peso'
                                    id={`peso${idx}`}
                                    name={`peso`}
                                    value={cao.peso}
                                    onChange={(e) => handleInputChange(idx, e)}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <label htmlFor={`sexo${idx}`}>Sexo:</label>
                                <select
                                    className="form-control"
                                    id={`sexo${idx}`}
                                    name={`sexo`}
                                    value={cao.sexo}
                                    onChange={(e) => handleInputChange(idx, e)}
                                >
                                    <option value="" disabled selected hidden>Selecione</option>
                                    <option value="M">Macho</option>
                                    <option value="F">Fêmea</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <label htmlFor={`castrado${idx}`}>Castrado:</label>
                                <select
                                    className="form-control"
                                    id={`castrado${idx}`}
                                    name={`castrado`}
                                    value={cao.castrado}
                                    onChange={(e) => handleInputChange(idx, e)}
                                >
                                    <option value="" disabled selected hidden>Selecione</option>
                                    <option value={"true"}>Sim</option>
                                    <option value={"false"}>Não</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {idx !== 0 && <RemoverCachorroButton onClick={() => handleRemoveCao(idx)} />}
                </div>
            ))}
            <AdicionarCachorroButton onClick={handleAddCao} />
        </div>
    );
};

export default CaoOrcamento;