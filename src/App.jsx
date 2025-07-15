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
      {/* Glassy Revolving SVG Blobs Background */}
      <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
        <img
          src={Ellipse4}
          alt=""
          className="absolute w-[70vw] left-[-10vw] top-[-10vw] opacity-80 animate-spin-slow pointer-events-none select-none"
          style={{ filter: 'blur(0px)' }}
        />
        <img
          src={Ellipse5}
          alt=""
          className="absolute w-[60vw] right-[-15vw] top-[20vw] opacity-80 animate-spin-reverse-slower pointer-events-none select-none"
          style={{ filter: 'blur(0px)' }}
        />
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
