import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Ellipse4 from './assets/Ellipse 4.svg';
import Ellipse5 from './assets/Ellipse 5.svg';

function App() {
  return (
    <div className="app-root relative overflow-hidden">
      {/* Glassy Revolving SVG Blobs Eight Shape Background */}
      <div className="fixed inset-0 -z-10 bg-white overflow-hidden flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center animate-spin-slow" style={{ width: '40vw', height: '80vw' }}>
          <img
            src={Ellipse4}
            alt=""
            className="w-[80vw] mb-[-6vw] pointer-events-none select-none"
            style={{ filter: 'blur(0px)' }}
          />
          <img
            src={Ellipse5}
            alt=""
            className="w-[80vw] mt-[-6vw] pointer-events-none select-none"
            style={{ filter: 'blur(0px)' }}
          />
        </div>
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
