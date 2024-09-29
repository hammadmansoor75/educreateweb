"use client";
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const SlideCanvas = ({ items }) => {
  return (
    <Droppable droppableId="canvas">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="relative bg-cover bg-center w-full h-screen"
          style={{ backgroundImage: 'url(/assets/course1.jpg)' }}
        >
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="absolute bg-gray-200 p-4 rounded"
                  style={{ top: item.position?.top || '0px', left: item.position?.left || '0px' }}
                >
                  {item.type === 'heading' && <h1>{item.content}</h1>}
                  {item.type === 'subheading' && <h2>{item.content}</h2>}
                  {item.type === 'text' && <p>{item.content}</p>}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default SlideCanvas;
