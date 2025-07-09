import React from 'react';
import { FaLinkedin, FaBehance } from 'react-icons/fa';
import Icon from '../assets/person.png'

const CircularText = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" className="circular-text-spin absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none">
    <defs>
      <path id="circle" d="M80,80 m-65,0 a65,65 0 1,1 130,0 a65,65 0 1,1 -130,0" />
    </defs>
    <text fontSize="12" fill="#0e9488" fontFamily="Georgia, serif" letterSpacing="2">
      <textPath xlinkHref="#circle" startOffset="0">
        DESIGN IS LIFE · DESIGN IS LIFE · DESIGN IS LIFE ·
      </textPath>
    </text>
  </svg>
);

const Home = () => {
  return (
    <section className="min-h-[76vh] text-black font-poppins flex flex-col justify-center px-4 md:px-20 lg:flex-row relative overflow-x-hidden bg-white">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center py-16 md:py-24 z-10 dark:py-20">
        <div className="relative w-fit mx-auto lg:mx-0 mb-4 flex items-center justify-center dark:mb-6" style={{minWidth: 'max-content'}}>
          <span className="block relative z-10 dark:hidden">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-2 whitespace-nowrap inline-block align-middle relative text-black">
              Hi, I am Munya
            </h1>
          </span>
          {/* Dark mode heading */}
          <h1 className="hidden dark:block text-black text-5xl md:text-7xl font-serif font-bold relative whitespace-nowrap">
            Hi, I am Munya
          </h1>
          {/* CircularText at the end of Munya, partially behind */}
          <span className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <CircularText />
          </span>
        </div>
        <p className="md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 dark:text-black dark:text-base dark:md:text-lg dark:mb-10 dark:leading-relaxed text-black">
          I'm a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
        </p>
        <div className="flex flex-wrap gap-8 font-semibold text-base md:text-lg dark:font-serif dark:text-sm dark:tracking-wide text-black">
          <a href="#" className="group hover:underline flex items-center gap-1 text-black">
            Resume
            <span className="arrow-rotate dark:hidden">
              <svg className="transition-transform -rotate-45 group-hover:rotate-0 text-black" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <svg className="hidden dark:inline transition-transform -rotate-45 group-hover:rotate-0 text-black" width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="group hover:underline flex items-center gap-1 text-black">
            Linkedin
            <span className="arrow-rotate dark:hidden">
              <svg className="transition-transform -rotate-45 group-hover:rotate-0 text-black" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <svg className="hidden dark:inline transition-transform -rotate-45 group-hover:rotate-0 text-black" width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="group hover:underline flex items-center gap-1 text-black">
            Behance
            <span className="arrow-rotate dark:hidden">
              <svg className="transition-transform -rotate-45 group-hover:rotate-0 text-black" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <svg className="hidden dark:inline transition-transform -rotate-45 group-hover:rotate-0 text-black" width="16" height="16" viewBox="0 0 16 16"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
      {/* Right Content */}
      <div className="flex-1 flex justify-center items-center relative mt-10 lg:mt-0 z-10 dark:mt-12">
        <div className="w-44 h-56 md:w-64 md:h-82 bg-[#161313] rounded-t-full rounded-b-none flex items-end justify-center relative shadow-lg rounded-t-[100px] shadow-xl">
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
