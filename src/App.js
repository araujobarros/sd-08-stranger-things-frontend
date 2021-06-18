import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv/config');

function App() {
  return (
    <div className="App">
      {/* <p>{typeof JSON.parse(process.env.REACT_APP_DEVELOPMENT)}</p> */}
      {/* {JSON.parse(process.env.REACT_APP_DEVELOPMENT) && <p>Em desenvolvimento</p>} */}
      <p>Em desenvolvimento</p>
      <StrangerThings />
    </div>
  );
}

export default App;
