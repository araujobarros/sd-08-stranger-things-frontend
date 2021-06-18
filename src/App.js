import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv/config');

function App() {
  return (
    <div className="App">
      {JSON.parse(process.env.REACT_APP_DEVELOPMENT) && <p>Em desenvolvimento</p>}
      <StrangerThings />
    </div>
  );
}

export default App;
