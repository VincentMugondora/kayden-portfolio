import React from 'react';
import { FaTwitter, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-6 bg-transparent font-sans text-black gap-4 md:gap-0">
    <div className="flex gap-6 md:gap-8 text-xl md:text-2xl">
      <a href="#" aria-label="Twitter"><FaTwitter /></a>
      <a href="#" aria-label="Dribbble"><FaDribbble /></a>
      <a href="#" aria-label="Behance"><FaBehance /></a>
      <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
    </div>
    <div className="text-base md:text-lg font-medium underline underline-offset-4 text-center">Designed by <span className="font-bold">Munyaradzi Mamu</span></div>
    <div className="text-xl md:text-2xl font-serif font-bold">Munyaradzi<span className="text-teal-600">.</span></div>
  </footer>
);

export default Footer; 