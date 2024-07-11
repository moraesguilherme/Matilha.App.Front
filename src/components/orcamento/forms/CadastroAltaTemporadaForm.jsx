import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CadastroAltaTemporadaForm = ({ cadastrarAltaTemporada }) => {
    const [inicioTemporada, setInicioTemporada] = useState('');
    const [fimTemporada, setFimTemporada] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const altaTemporada = {
            inicioTemporada: new Date(inicioTemporada).toISOString(),
            fimTemporada: new Date(fimTemporada).toISOString(),
            descricao
        };
        cadastrarAltaTemporada(altaTemporada);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md={4} controlId="inicioTemporada">
                    <Form.Label>Início da Temporada</Form.Label>
                    <Form.Control
                        type="date"
                        value={inicioTemporada}
                        onChange={(e) => setInicioTemporada(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="fimTemporada">
                    <Form.Label>Fim da Temporada</Form.Label>
                    <Form.Control
                        type="date"
                        value={fimTemporada}
                        onChange={(e) => setFimTemporada(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} md={4} controlId="descricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        type="text"
                        value={descricao}
                        placeholder='Digite a descrição da temporada...'
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit" className="mt-3">
                Cadastrar
            </Button>
        </Form>
    );
};

export default CadastroAltaTemporadaForm;
