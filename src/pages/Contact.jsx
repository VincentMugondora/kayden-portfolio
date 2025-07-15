import React from 'react';
import personImg from '../assets/person.png';

const CircularText = () => (
  <svg width="180" height="180" viewBox="0 0 180 180" className="absolute left-[60%] top-[-30px] md:left-[48%] md:top-[-40px] z-0 opacity-80 pointer-events-none">
    <defs>
      <path id="circle" d="M90,90 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" />
    </defs>
    <text fontSize="14" fill="#0e9488" fontFamily="Georgia, serif" letterSpacing="2">
      <textPath xlinkHref="#circle" startOffset="0">
        DESIGN IS LIFE · DESIGN IS LIFE · DESIGN IS LIFE ·
      </textPath>
    </text>
  </svg>
);

const Contact = () => {
  return (
    <section className="min-h-[80vh] w-full px-4 md:px-24 py-16 relative bg-[radial-gradient(circle_at_60%_40%,#d1fae5_0%,#e0f7ef_100%)] flex flex-col md:flex-row items-start justify-between transition-colors">
      {/* Left: Heading and Form */}
      <div className="flex-1 max-w-2xl z-10">
        <div className="relative mb-16">
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-2">Do you have any Ideas?<br />Let’s create the future</h1>
          <CircularText />
        </div>
        <form className="flex flex-col gap-10 mt-8">
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
          <button type="submit" className="mt-2 flex items-center gap-2 text-lg font-serif font-semibold hover:underline underline-offset-2 w-fit pl-0">
            SEND
            <span className="arrow-rotate">
              <svg width="18" height="18" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </button>
        </form>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
        <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-[#d1fae5] flex items-center justify-center relative shadow-xl">
          <img src={personImg} alt="Person" className="w-60 h-60 md:w-80 md:h-80 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Contact; 