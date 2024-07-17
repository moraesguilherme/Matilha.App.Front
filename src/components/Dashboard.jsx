import React, { useState } from "react";
import Card from './Card';
import './Dashboard.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    const addCard = () => {
        const newCard = {
            id: `card-${cards.length + 1}`,
            title: `Card ${cards.length + 1}`,
            content: `Conteúdo do card ${cards.length + 1}`
        };
        setCards([...cards, newCard]);
    };

    const removeCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = Array.from(cards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setCards(items);
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="greeting-section">
                    <div className="greeting-text">
                        <h2>Olá, Usuário</h2>
                        <p>Bem-vindo ao painel de gestão de pet creche e hotel!</p>
                    </div>
                </div>
                <button onClick={addCard}>Adicionar Card</button>
            </header>
            <main className="dashboard-main">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div className="card-container" ref={provided.innerRef} {...provided.droppableProps}>
                                {cards.map((card, index) => (
                                    <Draggable key={card.id} draggableId={card.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`card ${snapshot.isDragging ? 'is-dragging' : ''}`}
                                            >
                                                <Card title={card.title} content={card.content} onRemove={() => removeCard(card.id)} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </main>
        </div>
    );
};

export default Dashboard;