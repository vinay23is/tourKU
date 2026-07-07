import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Home />
      </main>
    </>
  );
}

export default App;
