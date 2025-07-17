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
    <nav
      className={`w-full flex items-center justify-between px-4 md:px-12 py-4 border-b border-black/10 font-serif sticky top-0 z-30 backdrop-blur-md transition-colors duration-300 ${
        darkMode ? 'bg-black/10' : 'bg-white/70'
      }`}
    >
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-serif font-bold tracking-tight select-none">
        Muny<span className="text-green-400">a</span>radzi.
      </div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center space-x-8 text-base font-medium">
        <li>
          <Link to="/works" className="hover:text-green-600 transition-colors">
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-600 transition-colors">
            Contact me
          </Link>
        </li>
        <button className="ml-4 px-4 py-1 border border-black rounded hover:bg-gray-100 transition-colors">
          My Resume
        </button>
        <span
          className="ml-4 text-2xl cursor-pointer"
          title="Toggle dark mode"
          onClick={handleToggleDark}
        >
          {darkMode ? '☀️' : '🌙'}
        </span>
      </ul>

      {/* Mobile Menu & Dark Mode */}
      <div className="flex md:hidden items-center space-x-2">
        <button
          className="border border-black rounded px-4 py-1 text-black font-semibold text-base"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>
        <span
          className="w-8 h-8 flex items-center justify-center rounded-full border border-black ml-2 bg-white cursor-pointer"
          title="Toggle dark mode"
          onClick={handleToggleDark}
        >
          {darkMode ? (
            // White moon icon for dark mode
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            // Black sun icon for light mode
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="black">
              <circle cx="12" cy="12" r="5" strokeWidth="2" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" />
            </svg>
          )}
        </span>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full shadow-lg flex flex-col items-center py-4 z-40 md:hidden animate-fade-in border-b border-black/10 backdrop-blur-md transition-colors duration-300 ${
            darkMode ? 'bg-black/30' : 'bg-white/70'
          }`}
        >
          <ul className="flex flex-col gap-4 text-base font-medium text-black font-serif">
            <li>
              <Link
                to="/works"
                className="hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <a
                href="#contributions"
                className="hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contributions
              </a>
            </li>
            <li>
              <a
                href="#talks"
                className="hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Talks
              </a>
            </li>
            <li>
              <a
                href="#community"
                className="hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Community
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact me
              </Link>
            </li>
          </ul>
          <button className="mt-4 px-4 py-1 border border-black rounded hover:bg-gray-100 transition-colors font-serif text-base font-medium">
            My Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
