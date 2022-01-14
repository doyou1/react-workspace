import React, { useEffect, useState } from 'react';
import './App.css';
import {store} from './index';

function App() {

  const [number, setNumber] = useState(0);

  useEffect(() => {
    store.subscribe(() => setNumber(store.getState()))
  }, []);
  return (
    <div className="App">
      <div>
        <button onClick={() => {
          store.dispatch({ type: 'INCREMENT' })
        }}>INCREMENT</button>
      </div>
      <div>
        <button onClick={() => {
          store.dispatch({ type: 'DECREMENT' })
        }}>DECREMENT</button>        
      </div>
      <div>
      {number}
      </div>
    </div>
  );
}

export default App;