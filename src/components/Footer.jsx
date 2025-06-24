import React from 'react';
import { FaTwitter, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full flex items-center justify-between px-8 py-6 bg-transparent font-sans text-black">
    <div className="flex gap-8 text-2xl">
      <a href="#" aria-label="Twitter"><FaTwitter /></a>
      <a href="#" aria-label="Dribbble"><FaDribbble /></a>
      <a href="#" aria-label="Behance"><FaBehance /></a>
      <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
    </div>
    <div className="text-lg font-medium underline underline-offset-4">Designed by <span className="font-bold">Munyaradzi Mamu</span></div>
    <div className="text-2xl font-serif font-bold">Munyaradzi<span className="text-teal-600">.</span></div>
  </footer>
);

export default Footer; 