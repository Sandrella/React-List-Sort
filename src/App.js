import React from 'react';
import logo from './logo.svg';
import './App.css';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ListExample from './components/ListExample'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <ListExample />
      </DndProvider>
    </div>
  );
}

export default App;
