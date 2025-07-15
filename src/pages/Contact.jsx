import React from 'react';
import personImg from '../assets/avatar.png';

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

const Contact = () => {
  return (
    <section className="h-[95vh] w-full px-4 md:px-24 py-16 relative bg-[radial-gradient(circle_at_60%_40%,#d1fae5_0%,#e0f7ef_100%)] flex flex-col md:flex-row items-start justify-between transition-colors">
      {/* Left: Heading and Form */}
      <div className="flex-1 max-w-2xl z-10">
        <div className="relative mb-16">
          <h1 className="text-5xl md:text-5xl font-serif font-bold leading-tight mb-2">Do you have any Ideas?<br />Let’s create the future</h1>
          <CircularText />
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