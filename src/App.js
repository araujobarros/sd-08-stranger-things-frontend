import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const appInDevelopment = process.env.REACT_APP_DEVELOPMENT === 'false';

function App() {
  return (
    <div className="App">
      { appInDevelopment }
      <StrangerThings />
    </div>
  );
}

export default App;
