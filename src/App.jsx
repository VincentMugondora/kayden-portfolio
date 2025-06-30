import React from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root relative overflow-hidden">
      {/* Rotating Green Eight Shape */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg width="900" height="900" viewBox="0 0 900 900" className="eight-shape-rotate" style={{ opacity: 0.15 }}>
          <path d="M450,230c-110-80-250,80-180,200s250,120,320,0-30-280-140-200zm0,440c-110,80-250-80-180-200s250-120,320,0-30,280-140,200z" fill="#10b981" />
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
