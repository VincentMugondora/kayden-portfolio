import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 px-4 md:px-6 py-4 bg-transparent font-serif flex flex-col md:flex-row md:items-center md:justify-between relative z-20">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-2xl font-bold">Munyaradzi<span className="text-teal-600">.</span></div>
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex gap-8 text-base font-normal md:items-center transition-all duration-300 bg-white md:bg-transparent w-full md:w-auto left-0 md:static absolute top-full md:top-auto shadow-md md:shadow-none z-10 ${menuOpen ? 'flex' : 'hidden md:flex'}`}
      >
        <li><a href="#" className="block py-2 md:py-0 px-4 md:px-0">Works</a></li>
        <li><a href="#" className="block py-2 md:py-0 px-4 md:px-0">Contributions</a></li>
        {/* <li><a href="#" className="block py-2 md:py-0 px-4 md:px-0">Talks</a></li>
        <li><a href="#" className="block py-2 md:py-0 px-4 md:px-0">Community</a></li> */}
        <li><a href="#" className="block py-2 md:py-0 px-4 md:px-0">Contact me</a></li>
        <li className="md:hidden flex flex-col gap-2 mt-2 border-t pt-2">
          <button className="border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition w-full">My Resume</button>
          <span className="text-2xl">🌙</span>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <button className="border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition">My Resume</button>
        <span className="text-2xl">🌙</span>
      </div>
    </nav>
  );
};

export default Navbar; 