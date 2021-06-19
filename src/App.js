import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const development = process.env.REACT_APP_DEVELOPMENT_TAG === 'true';

function App() {
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
