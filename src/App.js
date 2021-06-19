import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  const { REACT_APP_DEVELOPMENT_TAG: development } = process.env;
  return (
    <div className="App">
      {
        development && <div className="container"><p>Em desenvolvimento</p></div>
      }
      <StrangerThings />
    </div>
  );
}

export default App;
