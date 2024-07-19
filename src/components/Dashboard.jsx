import React, { useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import InfoCard from './InfoCard';
import ChartCard from './ChartCard';
import TableCard from './TableCard';
import './Dashboard.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Dashboard = () => {
  const [cards, setCards] = useState([]);

  const addCard = (type) => {
    const newCard = {
      id: `card-${cards.length + 1}`,
      type: type,
      title: `Card ${cards.length + 1}`,
      content: `Conteúdo do card ${cards.length + 1}`
    };
    setCards([...cards, newCard]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
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
        <WelcomeMessage userName="Ali Husni" />
        <button onClick={() => addCard('info')}>Adicionar InfoCard</button>
        <button onClick={() => addCard('chart')}>Adicionar LineChartCard</button>
        <button onClick={() => addCard('pie')}>Adicionar PieChartCard</button>
        <button onClick={() => addCard('table')}>Adicionar TableCard</button>
      </header>
      <main className="dashboard-main">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" type="CARD" direction="vertical">
            {(provided) => (
              <div
                className="card-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`card ${snapshot.isDragging ? 'is-dragging' : ''} ${card.type}-card`}
                      >
                        {card.type === 'info' && <InfoCard title={card.title} value="1.456" description="Since last week" />}
                        {card.type === 'chart' && <ChartCard type="line" />}
                        {card.type === 'pie' && <ChartCard type="pie" />}
                        {card.type === 'table' && (
                          <TableCard
                            columns={['No', 'Id Customers', 'Customers name', 'Items Name', 'Order Date', 'Status', 'Price']}
                            data={[
                              ['1', '#065499', 'Eren Yaeger', '1x Black Backpack', '21/07/2022 08:21', 'Paid', '$101'],
                              ['2', '#065499', 'Levi Ackerman', '1x Distro Backpack', '21/07/2022 08:21', 'Pending', '$144'],
                              ['3', '#065499', 'Rainer Brown', '1x New Backpack', '21/07/2022 08:21', 'Paid', '$121'],
                              ['4', '#065499', 'Historia Reiss', '2x Black Backpack', '21/07/2022 08:21', 'Overdue', '$300']
                            ]}
                          />
                        )}
                        <button onClick={() => removeCard(card.id)}>Remover</button>
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
