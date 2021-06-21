import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const development = process.env.REACT_APP_DEVELOPMENT === false;

function App() {
  return (
    <div className="App">
      {development && <div><p>Em desenvolvimento</p></div>}
      <StrangerThings />
    </div>
  );
}

export default App;
