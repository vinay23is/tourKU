import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'; 
import Services from './components/pages/Services';
import TourTimes from './components/pages/TourTimes';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tourtimes" element={<TourTimes />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  </>
      
   
  );
}

export default App;
