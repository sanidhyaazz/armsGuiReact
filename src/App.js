import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Header from "./components/header";
import ControlSystem from './components/controlSystem';
function App() {

  return (
    <div>
      <Header />
      <ControlSystem />
    </div>
  );
}

export default App;
