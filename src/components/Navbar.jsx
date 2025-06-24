import React from 'react';

const Navbar = () => (
  <nav className="w-full flex items-center justify-between border-b border-gray-300 px-6 py-4 bg-transparent font-serif">
    <div className="text-2xl font-bold">Munyaradzi<span className="text-teal-600">.</span></div>
    <ul className="flex gap-8 text-base font-normal">
      <li><a href="#">Works</a></li>
      <li><a href="#">Contributions</a></li>
      <li><a href="#">Talks</a></li>
      <li><a href="#">Community</a></li>
      <li><a href="#">Contact me</a></li>
    </ul>
    <div className="flex items-center gap-4">
      <button className="border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition">My Resume</button>
      <span className="text-2xl">🌙</span>
    </div>
  </nav>
);

export default Navbar; 