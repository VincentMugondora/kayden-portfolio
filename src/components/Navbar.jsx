import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDark = () => setDarkMode((d) => !d);

  return (
    <nav className="w-full border-b border-gray-300 px-6 py-4 font-serif flex items-center justify-between sticky top-0 z-30 bg-opacity-85" style={{ background: 'rgba(255,255,255,0.85)' }}>
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight select-none">
        Munyaradzi<span className="text-teal-600">.</span>
      </div>
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-base font-normal text-gray-900 font-sans mx-auto">
        <li><a href="#" className="hover:underline underline-offset-4 transition">Works</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Contributions</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Talks</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Community</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Contact me</a></li>
      </ul>
      {/* Desktop Resume & Theme Icon */}
      <div className="hidden md:flex items-center gap-4">
        <button className="border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition font-sans text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500">My Resume</button>
        <span className="text-2xl cursor-pointer" title="Toggle dark mode" onClick={handleToggleDark}>{darkMode ? '☀️' : '🌙'}</span>
      </div>
      {/* Mobile Menu Button */}
      <button className="md:hidden border border-gray-900 px-4 py-1 rounded font-sans text-base font-medium flex items-center gap-2" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white bg-opacity-95 shadow-lg flex flex-col items-center py-4 z-40 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-4 text-base font-normal text-gray-900 font-sans">
            <li><a href="#" className="hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Works</a></li>
            <li><a href="#" className="hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Contributions</a></li>
            <li><a href="#" className="hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Talks</a></li>
            <li><a href="#" className="hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Community</a></li>
            <li><a href="#" className="hover:underline underline-offset-4 transition" onClick={() => setMenuOpen(false)}>Contact me</a></li>
          </ul>
          <button className="mt-4 border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition font-sans text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500">My Resume</button>
          <span className="mt-4 text-2xl cursor-pointer" title="Toggle dark mode" onClick={handleToggleDark}>{darkMode ? '☀️' : '🌙'}</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 