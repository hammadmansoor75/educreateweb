"use client";
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Sidebar = () => {
  const items = [
    { id: 'heading', content: 'Heading', type: 'heading' },
    { id: 'subheading', content: 'Subheading', type: 'subheading' },
    { id: 'text', content: 'Text', type: 'text' },
  ];

  return (
    <div className="w-64 bg-gray-200 p-4 h-screen">
      <h2 className="text-xl font-semibold mb-4">Components</h2>
      {items.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="bg-gray-300 p-2 mb-2 rounded cursor-grab"
            >
              {item.content}
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Sidebar;
