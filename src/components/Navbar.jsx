import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="w-full flex items-center justify-between px-4 md:px-12 py-4 border-b border-black/10 bg-white/60 backdrop-blur-lg font-serif sticky top-0 z-30 dark:bg-white/10 dark:border-white/20 dark:text-white">
      {/* Logo */}
      <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight select-none dark:text-white">Muny<span className="text-green-400">a</span>radzi.</Link>
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center space-x-8 text-base font-medium dark:text-white">
        <li><Link to="/works" className="hover:text-green-600 transition-colors dark:hover:text-green-400">Works</Link></li>
        <li><a href="#contributions" className="hover:text-green-600 transition-colors dark:hover:text-green-400">Contributions</a></li>
        <li><a href="#talks" className="hover:text-green-600 transition-colors dark:hover:text-green-400">Talks</a></li>
        <li><a href="#community" className="hover:text-green-600 transition-colors dark:hover:text-green-400">Community</a></li>
        <li><Link to="/contact" className="hover:text-green-600 transition-colors dark:hover:text-green-400">Contact me</Link></li>
        <button className="ml-4 px-4 py-1 border border-black rounded hover:bg-gray-100 transition-colors dark:border-white dark:hover:bg-white/10 dark:hover:text-green-300">My Resume</button>
        <span className="ml-4 text-2xl cursor-pointer" title="Toggle dark mode" onClick={handleToggleDark}>{darkMode ? '☀️' : '🌙'}</span>
      </ul>
      {/* Mobile Menu & Dark Mode */}
      <div className="flex md:hidden items-center space-x-2">
        <button className="border border-black rounded px-4 py-1 text-black font-semibold text-base dark:border-white dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
        <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black ml-2 bg-white cursor-pointer dark:border-white dark:bg-black/70" title="Toggle dark mode" onClick={handleToggleDark}>
          {darkMode ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><circle cx="12" cy="12" r="8" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="white"/></svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black"><circle cx="12" cy="12" r="8" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="black"/></svg>
          )}
        </span>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 z-40 md:hidden animate-fade-in border-b border-black/10 dark:bg-black/90 dark:border-white/20">
          <ul className="flex flex-col gap-4 text-base font-medium text-black font-serif dark:text-white">
            <li><Link to="/works" className="hover:text-green-600 transition-colors dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>Works</Link></li>
            <li><a href="#contributions" className="hover:text-green-600 transition-colors dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>Contributions</a></li>
            <li><a href="#talks" className="hover:text-green-600 transition-colors dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>Talks</a></li>
            <li><a href="#community" className="hover:text-green-600 transition-colors dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>Community</a></li>
            <li><Link to="/contact" className="hover:text-green-600 transition-colors dark:hover:text-green-400" onClick={() => setMenuOpen(false)}>Contact me</Link></li>
          </ul>
          <button className="mt-4 px-4 py-1 border border-black rounded hover:bg-gray-100 transition-colors font-serif text-base font-medium dark:border-white dark:text-white dark:hover:bg-white/10 dark:hover:text-green-300">My Resume</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 