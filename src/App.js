import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Header from "./components/header";
import ControlSystem from './components/controlSystem';
function App() {
  const [count, setCount]= useState(0);

  function increase(){
    setCount(count+1);
  }

  function decrease(){
    setCount(count-1);
  }

console.log(count);

  return (
    <div>
      <Header />
      <ControlSystem />

      <p>{count}</p>
      <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
