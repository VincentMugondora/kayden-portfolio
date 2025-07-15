import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-root relative overflow-hidden">
      {/* Glassy Revolving Green Circles Background */}
      <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
        <div className="absolute w-[60vw] h-[60vw] left-[-20vw] top-[-10vw] rounded-full bg-[#0d3d2c] opacity-60 blur-3xl animate-spin-slow" />
        <div className="absolute w-[70vw] h-[70vw] right-[-25vw] top-[10vw] rounded-full bg-[#0d3d2c] opacity-60 blur-3xl animate-spin-reverse-slower" />
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
