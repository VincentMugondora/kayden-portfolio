import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-300 px-6 py-4 font-serif flex items-center justify-between sticky top-0 z-30" style={{ background: 'radial-gradient(circle at 60% 40%, #d1fae5 0%, #f0fdfa 100%)' }}>
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight select-none">
        Munyaradzi<span className="text-teal-600">.</span>
      </div>
      {/* Nav Links */}
      <ul className="flex gap-8 text-base font-normal text-gray-900 font-sans mx-auto">
        <li><a href="#" className="hover:underline underline-offset-4 transition">Works</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Contributions</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Talks</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Community</a></li>
        <li><a href="#" className="hover:underline underline-offset-4 transition">Contact me</a></li>
      </ul>
      {/* Resume Button & Theme Icon */}
      <div className="flex items-center gap-4">
        <button className="border border-gray-900 px-4 py-1 rounded hover:bg-gray-900 hover:text-white transition font-sans text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500">My Resume</button>
        <span className="text-2xl cursor-pointer" title="Toggle dark mode">🌙</span>
      </div>
    </nav>
  );
};

export default Navbar; 