import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').setings({ path: '../.env' });

function App() {
  return (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

// .

export default App;
