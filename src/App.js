import React from 'react';
import './App.css';
import DevMode from './components/DevMode';

import StrangerThings from './components/StrangerThings';

const devMode = process.env.REACT_APP_DEVELOPMENT === 'true';

function App() {
  return (
    <div className="App">
      {devMode && <DevMode />}
      <StrangerThings />
    </div>
  );
}

export default App;
