import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const isDev = process.env.REACT_APP_DEVELOPMENT === 'TRUE';

console.log(isDev);
console.log(typeof (isDev));

function App() {
  return (
    <div className="App">
      { isDev
        ? <div>Em desenvolvimento</div>
        : <StrangerThings /> }
    </div>
  );
}

export default App;
