import React, { useState, useEffect } from 'react';
import './App.css';
import Home from "./components/Home";
import Locations from "./components/Locations";
import About from "./components/About";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for images and videos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
          <Locations />
          <About />
        </>
      )}
    </div>
  );
}

export default App;
