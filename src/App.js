import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const isDevelopment = process.env.REACT_APP_DEVELOPMENT;

function App() {
  return (
    <div className="App">
      { isDevelopment
        ? <div>Em desenvolvimento</div>
        : <StrangerThings /> }
    </div>
  );
}

export default App;
