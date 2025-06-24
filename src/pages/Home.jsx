import React from 'react';
import { FaLinkedin, FaBehance } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-white to-white text-gray-900 font-sans flex flex-col justify-center items-center px-4 md:px-20 lg:flex-row">
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I am Munya</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-6">
          I’m a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
        </p>

        <div className="flex justify-center lg:justify-start space-x-6 text-sm md:text-base font-semibold">
          <a href="#" className="hover:underline">Resume ↗</a>
          <a href="#" className="hover:underline flex items-center gap-1"><FaLinkedin /> LinkedIn ↗</a>
          <a href="#" className="hover:underline flex items-center gap-1"><FaBehance /> Behance ↗</a>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-center items-center relative mt-10 lg:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-black flex items-center justify-center overflow-hidden relative">
          {/* Replace with actual image */}
          <img
            src="https://em-content.zobj.net/thumbs/160/apple/354/person-with-fingers-crossed-medium-dark-skin-tone_1f91e-1f3fe_1f3fe.png"
            alt="Munya Emoji"
            className="w-40 h-40 object-cover"
          />
        </div>

        {/* Scroll Indicator */}
        <p className="absolute right-[-40px] bottom-4 rotate-90 text-sm text-gray-700 tracking-wide">
          SCROLL ↗
        </p>
      </div>
    </section>
  );
};

export default Home;
