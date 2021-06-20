import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

const developmentMode = process.env.REACT_APP_DEVELOPMENT_MODE === 'true';

function App() {
  return (
    <div className="App">
      {developmentMode && <p>Em desenvolvimento</p>}
      <StrangerThings />
    </div>
  );
}

export default App;
