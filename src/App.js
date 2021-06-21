import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const development = process.env.REACT_APP_DEVELOMPENT === 'true';

function App() {
  return (
    <div className="App">
      {APP_DEVELOPMENT && <p>Em desenvolvimento</p>} 
      <StrangerThings />
    </div>
  );
}

export default App;
