import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  // Nodes
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },

  // Edges
  { id: 'e1-2', source: '1', target: '2', animated: true },  // Connection from Node 1 to Node 2
  { id: 'e1-3', source: '1', target: '3', animated: false }, // Connection from Node 1 to Node 3
];

export function ConnectionsGraph() {
  return (
    <div style={{ height: 300 }}>
      <ReactFlow elements={elements} />
    </div>
  );
}


