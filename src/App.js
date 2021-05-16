import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./HomeScreen"
import Nav from "./Nav"

function App() {
  return (
    <div className="app">
     <HomeScreen />
     <Nav />
    </div>
  );
}

export default App;
