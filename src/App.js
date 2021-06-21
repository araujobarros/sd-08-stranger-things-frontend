import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const APP_DEVELOPMENT = false;

function App() {
  return (
    <div className="App">
      {APP_DEVELOPMENT && <p>Em desenvolvimento</p>} 
      <StrangerThings />
    </div>
  );
}

export default App;
