import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import DevelopmentTag from './components/DevelopmentTag';

const developmentMode = process.env.REACT_APP_DEVELOPMENT === 'true';

function App() {
  return (
    <div className="App">
      { developmentMode && <DevelopmentTag /> }
      <StrangerThings />
    </div>
  );
}

export default App;
