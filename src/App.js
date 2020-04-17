import React from 'react';
import './App.css';
import List from './components/List'

function App() {
  return <div className="todo">
    <div className="todo__sidebar">
      <List />
    </div>
    <div className="todo__tasks"></div>
  </div>;
}

export default App;
