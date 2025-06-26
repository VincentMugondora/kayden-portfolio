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
    <section className="min-h-[76vh] bg-[radial-gradient(circle_at_60%_40%,#d1fae5_0%,#f0fdfa_100%)] text-gray-900 font-poppins flex flex-col justify-center px-4 md:px-20 lg:flex-row relative overflow-x-hidden">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center py-16 md:py-24 z-10">
        <div className="relative w-fit mx-auto lg:mx-0 mb-4 flex items-center justify-center" style={{minWidth: 'max-content'}}>
          <span className="block relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-2 whitespace-nowrap inline-block align-middle relative">
              Hi, I am Munya
            </h1>
          </span>
          {/* CircularText at the end of Munya, partially behind */}
          <span className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <CircularText />
          </span>
        </div>
        <p className="md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
          I'm a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
        </p>
        <div className="flex flex-wrap gap-8 font-semibold text-base md:text-lg">
          <a href="#" className="hover:underline flex items-center gap-1">
            Resume
            <svg width="16" height="16" fill="black" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            Linkedin
            <svg width="16" height="16" fill="black" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="hover:underline flex items-center gap-1">
            Behance
            <svg width="16" height="16" fill="black" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center items-center relative mt-10 lg:mt-0 z-10">
        <div className="w-44 h-56 md:w-56 md:h-72 bg-black rounded-t-full rounded-b-none flex items-end justify-center overflow-hidden relative shadow-lg">
          <img
            src={Icon}
            alt="Munya Emoji"
            className="w-40 h-40 md:w-64 md:h-64 object-contain mb-0"
          />
        </div>
        {/* Scroll Indicator */}
        <p className="absolute right-[-40px] bottom-8 rotate-90 text-base text-gray-700 tracking-wide font-semibold">
          SCROLL <span aria-hidden>↗</span>
        </p>
      </div>
    </section>
  );
};

export default Home;
