import React, { useState } from 'react';
import './App.css';
import CountOption from './Components/CountOption';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };
  return (
    <div className='App'>
      <button onClick={handleIncrement}>Increment</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>Decrement</button>
      <CountOption />
    </div>
  );
}

export default App;
