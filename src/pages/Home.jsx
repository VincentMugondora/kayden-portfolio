import React from 'react';
import { FaLinkedin, FaBehance } from 'react-icons/fa';
import Icon from '../assets/person.png'

const CircularText = () => (
  <svg width="130" height="130" viewBox="0 0 130 130" className="circular-text-spin absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none">
    <defs>
      <path id="circle" d="M65,65 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0" />
    </defs>
    <text fontSize="10" fill="#0e9488" fontFamily="poppins-thin" letterSpacing="2">
      <textPath xlinkHref="#circle" startOffset="0">
        DESIGN IS LIFE · DESIGN IS LIFE · DESIGN IS LIFE ·
      </textPath>
    </text>
  </svg>
);

const Home = () => {
  return (
    <section className="min-h-[90vh] text-black font-poppins flex flex-col justify-center px-4 md:px-20 lg:flex-row relative overflow-x-hidden bg-white/30 backdrop-blur-lg border border-white/40 shadow">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center py-16 md:py-24 z-10 dark:py-20">
        <div className="relative w-fit mx-auto lg:mx-0 mb-4 flex items-center justify-center dark:mb-6" style={{minWidth: 'max-content'}}>
          <span className="block relative z-10 dark:hidden">
            <h1 className="text-5xl vollkorn md:text-7xl lg:text-7xl font-bold mb-2 whitespace-nowrap inline-block align-middle relative text-black">
              Hi, I am Munya
            </h1>
          </span>
          {/* Dark mode heading */}
          <h1 className="hidden dark:block text-black text-5xl md:text-7xl font-serif font-bold relative whitespace-nowrap">
            Hi, I am Munya
          </h1>
          {/* CircularText at the end of Munya, partially behind */}
          <span className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-[-1] pointer-events-none">
            <CircularText />
          </span>
        </div>
        <p className="md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 dark:text-black dark:text-base dark:md:text-lg dark:mb-10 dark:leading-relaxed text-black">
          I'm a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
        </p>
        <div className="flex flex-wrap gap-8 font-semibold text-base md:text-lg dark:font-serif dark:text-sm dark:tracking-wide text-black">
          <a href="#" className="group flex items-center gap-1 hover:underline hover:decoration-green-600 hover:underline-offset-4 decoration-2">
            <span className="transition-colors group-hover:text-green-600">Resume</span>
            <svg className="hidden dark:inline transition-transform -rotate-45 group-hover:rotate-0 group-hover:text-green-600" width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="group flex items-center gap-1 hover:underline hover:decoration-green-600 hover:underline-offset-4 decoration-2">
            <span className="transition-colors group-hover:text-green-600">Linkedin</span>
            <svg className="hidden dark:inline transition-transform -rotate-45 group-hover:rotate-0 group-hover:text-green-600" width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="group flex items-center gap-1 hover:underline hover:decoration-green-600 hover:underline-offset-4 decoration-2">
            <span className="transition-colors group-hover:text-green-600">Behance</span>
            <svg className="hidden dark:inline transition-transform -rotate-45 group-hover:rotate-0 group-hover:text-green-600" width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
      {/* Right Content */}
      <div className="flex-1 flex justify-center items-center relative mt-10 lg:mt-0 z-10 dark:mt-12">
        <div className="relative group w-44 h-56 md:w-64 md:h-82 bg-black dark:bg-white rounded-t-full rounded-b-none flex items-end justify-center shadow-lg rounded-t-[100px] shadow-xl">
          {/* Speech bubble */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-black text-base rounded-2xl shadow group-hover:opacity-100 opacity-0 transition-opacity pointer-events-none before:content-[''] before:absolute before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-t-white before:border-x-transparent before:border-b-0 before:border-solid before:w-0 before:h-0">
            Hi, I am Munya
          </div>
          <img
            src={Icon}
            alt="Munya Emoji"
            className="w-40 h-40 md:w-64 md:h-72 object-contain mb-[-10px]"
          />
        </div>
        {/* Scroll Indicator */}
        <p className="absolute right-[-40px] bottom-8 rotate-90 text-base text-gray-700 tracking-wide font-semibold dark:text-sm dark:text-gray-400 text-black">
          SCROLL <span aria-hidden>↗</span>
        </p>
      </div>
    </section>
  );
};

export default Home;
