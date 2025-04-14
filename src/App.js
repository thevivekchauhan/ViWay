import React from 'react';
import './App.css';
import Home from "./components/Home";
import Locations from "./components/Locations";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Home />
      <Locations />
      <About />
    </div>
  );
}

export default App;
