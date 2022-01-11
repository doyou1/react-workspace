import { useState } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

const App = () => {
  const [number, setNumber] = useState(5);

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onClick={function(size) {
        setNumber((prev) => (prev + size));
      }}/>
      <DisplayNumberRoot number={number}/>
    </div>
  );
}

export default App;