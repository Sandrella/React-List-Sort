import React from 'react';
import logo from './logo.svg';
import './App.css';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ListExample from './components/ListExample'
import Parent from './components/Parent'

function App() {
  const list = [1, 2, 3, 4, 5]
  return (
    <>
      <div className="App">
        <DndProvider backend={HTML5Backend}>
          <ListExample />
        </DndProvider>
      </div>
      <Parent list={list} />
    </>
  );
}

export default App;
