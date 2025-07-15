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
      {/* Glassy Revolving Green Blobs Background */}
      <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
        {/* Blob 1: Bright Green */}
        <div className="absolute w-[100vw] h-[100vw] left-[-30vw] top-[-25vw] opacity-60 blur-[120px] animate-spin-slow"
          style={{ background: '#1ED291', borderRadius: '42% 58% 63% 37% / 55% 45% 60% 40%' }}
        />
        {/* Blob 2: Deep Green */}
        <div className="absolute w-[120vw] h-[120vw] right-[-45vw] top-[15vw] opacity-60 blur-[140px] animate-spin-reverse-slower"
          style={{ background: '#00754B', borderRadius: '60% 40% 55% 45% / 40% 60% 45% 55%' }}
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
