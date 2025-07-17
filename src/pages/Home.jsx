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
    <section className="min-h-screen w-full bg-gradient-to-br from-[#eafff4] via-[#d2f7e9] to-[#eafff4] dark:from-[#0f2c1e] dark:via-[#183c2b] dark:to-black flex flex-col font-poppins relative overflow-x-hidden dark:text-white">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full flex-1 items-center md:items-start justify-center md:justify-between px-4 md:px-20 pt-8 md:pt-24 pb-8 md:pb-0 relative">
        {/* Left/Text Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start z-10">
          <div className="relative w-fit mb-4 flex items-center justify-center md:justify-start" style={{minWidth: 'max-content'}}>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-2 text-black text-center md:text-left leading-tight dark:text-white">
              Hi, I am Munya
            </h1>
            {/* CircularText at the end of Munya, partially behind */}
            <span className="absolute right-[-40px] md:right-[-120px] top-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <svg width="120" height="120" viewBox="0 0 130 130" className="circular-text-spin">
                <defs>
                  <path id="circle" d="M65,65 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0" />
                </defs>
                <text fontSize="10" fill="#1de9b6" fontFamily="poppins-thin" letterSpacing="2">
                  <textPath xlinkHref="#circle" startOffset="0">
                    DESIGN IS LIFE · DESIGN IS LIFE · DESIGN IS LIFE ·
                  </textPath>
                </text>
              </svg>
            </span>
          </div>
          <p className="md:text-xl max-w-xl mb-8 text-black text-center md:text-left dark:text-white">
            I'm a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
          </p>
          <div className="flex flex-wrap gap-8 font-serif font-semibold text-base md:text-lg text-black justify-center md:justify-start mb-8 dark:text-white">
            <a href="#" className="flex items-center gap-1 hover:underline dark:hover:text-green-300">Resume <span className="inline-block -rotate-45">↗</span></a>
            <a href="#" className="flex items-center gap-1 hover:underline dark:hover:text-green-300">Linkedin <span className="inline-block -rotate-45">↗</span></a>
            <a href="#" className="flex items-center gap-1 hover:underline dark:hover:text-green-300">Behance <span className="inline-block -rotate-45">↗</span></a>
          </div>
        </div>
        {/* Right/Emoji Arch */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative mt-10 md:mt-0 z-10">
          <div className="w-64 h-72 md:w-96 md:h-[28rem] bg-black rounded-t-full rounded-b-none flex items-end justify-center overflow-hidden shadow-lg">
            <img src={Icon} alt="Munya Emoji" className="w-56 h-56 md:w-80 md:h-80 object-contain mb-[-10px]" />
          </div>
          {/* Scroll Indicator */}
          <span className="absolute right-[-32px] bottom-8 md:bottom-0 text-base text-black tracking-widest font-serif font-semibold rotate-90 dark:text-white/70" style={{letterSpacing:'0.2em'}}>SCROLL <span aria-hidden>↗</span></span>
        </div>
      </div>
    </section>
  );
};

export default Home;
