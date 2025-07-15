import React from 'react';
import personImg from '../assets/avatar.png';

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

const Contact = () => {
  return (
    <section className="h-[95vh] w-full px-4 md:px-24 py-16 relative bg-white/30 backdrop-blur-lg border border-white/40 shadow flex flex-col md:flex-row items-start justify-between transition-colors">
      {/* Left: Heading and Form */}
      <div className="flex-1 max-w-2xl z-10">
        <div className="relative mb-16 flex items-center w-fit">
          <h1 className="text-5xl md:text-5xl font-serif font-bold leading-tight mb-2 relative z-10 whitespace-nowrap">
            Do you have any Ideas?<br />Let’s create the future
          </h1>
          <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <CircularText />
          </span>
        </div>
        <form className="flex flex-col gap-6 mt-5">
          <div>
            <label className="block mb-2 text-base font-serif">Name</label>
            <input type="text" className="w-full bg-transparent border-0 border-b-2 border-gray-700 focus:border-black focus:border-b-2 focus:ring-0 text-lg font-sans outline-none transition-colors" />
          </div>
          <div>
            <label className="block mb-2 text-base font-serif">Email</label>
            <input type="email" className="w-full bg-transparent border-0 border-b-2 border-gray-700 focus:border-black focus:border-b-2 focus:ring-0 text-lg font-sans outline-none transition-colors" />
          </div>
          <div>
            <label className="block mb-2 text-base font-serif">Message</label>
            <textarea rows={2} className="w-full bg-transparent border-0 border-b-2 border-gray-700 focus:border-black focus:border-b-2 focus:ring-0 text-lg font-sans outline-none resize-none transition-colors" />
          </div>
          <button type="submit" className="group flex items-center gap-1 hover:underline hover:decoration-green-600 hover:underline-offset-4 decoration-2 text-lg font-serif font-semibold w-fit pl-0 transition-colors mt-2">
            <span className="transition-colors group-hover:text-green-600">SEND</span>
            <svg className="transition-transform -rotate-45 group-hover:rotate-0 group-hover:text-green-600" width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </form>
      </div>
      {/* Right: Image */}
      <div className="h-[90vh] flex-1 flex items-center justify-center mt-32 md:mt-0">
        <div className="">
          <img src={personImg} alt="Person" className="w-60 h-60 md:w-80 md:h-80 object-cover animate-floatY" />
        </div>
      </div>
    </section>
  );
};

export default Contact; 