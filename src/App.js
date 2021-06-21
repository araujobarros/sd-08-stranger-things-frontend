import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const dev = process.env.REACT_APP_DEV_MODE === 'true';

function App() {
  return (
    <div className="App">
      {dev && <p>Em desenvolvimento</p>}
      <StrangerThings />
    </div>
  );
}

export default App;
