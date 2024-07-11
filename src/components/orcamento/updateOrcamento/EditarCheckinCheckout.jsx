import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EditarCheckinCheckout = ({ orcamento, updateCheckinCheckout }) => {
    const [editedCheckinCheckout, setEditedCheckinCheckout] = useState({
        dataEntrada: orcamento.dataEntrada,
        horarioEntrada: orcamento.horarioEntrada,
        dataSaida: orcamento.dataSaida,
        horarioSaida: orcamento.horarioSaida
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCheckinCheckout(prevState => ({
            ...prevState,
            [name]: value
        }));
        updateCheckinCheckout({ [name]: value });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate() + 1}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={3}>
                        <h5>Data de Entrada</h5>
                        <input
                            type="date"
                            name="dataEntrada"
                            value={formatDate(editedCheckinCheckout.dataEntrada)}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col md={3}>
                        <h5>Horário de Entrada</h5>
                        <input
                            type="time"
                            name="horarioEntrada"
                            value={editedCheckinCheckout.horarioEntrada}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col md={3}>
                        <h5>Data de Saída</h5>
                        <input
                            type="date"
                            name="dataSaida"
                            value={formatDate(editedCheckinCheckout.dataSaida)}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col md={3}>
                        <h5>Horário de Saída</h5>
                        <input
                            type="time"
                            name="horarioSaida"
                            value={editedCheckinCheckout.horarioSaida}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default EditarCheckinCheckout;
