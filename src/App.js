import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const appInDevelopment = process.env.REACT_APP_DEVELOPMENT || 'true';

function App() {
  return (
    <div className="App">
      { appInDevelopment }
      <p> Em desenvolvimento </p>
      <StrangerThings />
    </div>
  );
}

export default App;
