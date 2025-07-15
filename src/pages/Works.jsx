import React, { useState } from 'react';
import { Moon, Sun, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-black text-white' : 'bg-white/30 text-gray-900'
    } backdrop-blur-lg border border-white/40 shadow`}>
      {/* Navigation */}
      {/* <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">
          Munyaradzi
        </div>
        
        <div className="flex space-x-8">
          <a href="#works" className="hover:text-green-600 transition-colors">Works</a>
          <a href="#contributions" className="hover:text-green-600 transition-colors">Contributions</a>
          <a href="#talks" className="hover:text-green-600 transition-colors">Talks</a>
          <a href="#community" className="hover:text-green-600 transition-colors">Community</a>
          <a href="#contact" className="hover:text-green-600 transition-colors">Contact me</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition-colors">
            My Resume
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div className="px-8 py-16">
        <div className="mb-4">
          <h1 className="text-9xl font-bold opacity-20 mb-8">Works</h1>
        </div>
        
        <h2 className="text-4xl font-bold mb-12 -mt-16">Website Projects</h2>
        
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className={`group relative p-8 rounded-lg border-2 transition-all duration-500 hover:shadow-lg overflow-hidden ${
            darkMode ? 'bg-gray-800 border-gray-700 hover:bg-green-600' : 'bg-green-50 border-green-600 hover:bg-green-600'
          }`}>
            {/* Default Content */}
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="text-4xl font-bold text-green-600 mb-4 group-hover:text-white">
                Food<br />Donation App
              </h3>
              <p className="text-sm mb-6 leading-relaxed">
                A platform designed to reduce food waste by connecting food donors, such 
                as restaurants, grocery stores, and individuals, with NGOs that distribute 
                food to those in need. The platform facilitates the donation process, 
                ensuring that surplus food reaches those who need it the most, while 
                contributing to a more sustainable community.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:text-green-600 transition-colors">
                Casestudy <ExternalLink size={16} className="ml-1" />
              </a>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
              {/* Phone Mockups */}
              <div className="relative mb-8">
                {/* Phone 1 */}
                <div className="relative w-32 h-56 bg-black rounded-3xl p-1 transform -rotate-12 -translate-x-4">
                  <div className="w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 w-12 h-1 bg-black rounded-full"></div>
                    <div className="text-lg font-bold text-orange-500 mb-2">FOODIN.DO</div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Phone 2 */}
                <div className="absolute -top-4 left-12 w-32 h-56 bg-black rounded-3xl p-1 transform rotate-6">
                  <div className="w-full h-full bg-white rounded-3xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
                    <div className="flex-1 bg-orange-100 m-1 mt-8 rounded-3xl relative">
                      <div className="absolute top-4 left-4 text-xs font-bold">Good Morning</div>
                      <div className="absolute top-8 left-4 text-xs text-gray-600">Zimbabwean!</div>
                      <div className="absolute top-16 left-4 right-4 h-16 bg-orange-300 rounded-xl"></div>
                      <div className="absolute bottom-16 left-4 right-4 grid grid-cols-2 gap-2">
                        <div className="h-8 bg-orange-400 rounded"></div>
                        <div className="h-8 bg-orange-400 rounded"></div>
                      </div>
                      <div className="absolute bottom-8 left-4 right-4 h-6 bg-orange-500 rounded"></div>
                      <div className="absolute bottom-2 left-4 right-4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Casestudy Link */}
              <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-orange-200 transition-colors underline">
                Casestudy <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`group relative p-8 rounded-lg border-2 transition-all duration-500 hover:shadow-lg overflow-hidden ${
            darkMode ? 'bg-gray-800 border-gray-700 hover:bg-green-600' : 'bg-green-50 border-green-600 hover:bg-green-600'
          }`}>
            {/* Default Content */}
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="text-4xl font-bold text-green-600 mb-4 group-hover:text-white">
                Food<br />Donation App
              </h3>
              <p className="text-sm mb-6 leading-relaxed">
                A platform designed to reduce food waste by connecting food donors, such 
                as restaurants, grocery stores, and individuals, with NGOs that distribute 
                food to those in need. The platform facilitates the donation process, 
                ensuring that surplus food reaches those who need it the most, while 
                contributing to a more sustainable community.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:text-green-600 transition-colors">
                Casestudy <ExternalLink size={16} className="ml-1" />
              </a>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
              {/* Phone Mockups */}
              <div className="relative mb-8">
                {/* Phone 1 */}
                <div className="relative w-32 h-56 bg-black rounded-3xl p-1 transform -rotate-12 -translate-x-4">
                  <div className="w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 w-12 h-1 bg-black rounded-full"></div>
                    <div className="text-lg font-bold text-orange-500 mb-2">FOODIN.DO</div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Phone 2 */}
                <div className="absolute -top-4 left-12 w-32 h-56 bg-black rounded-3xl p-1 transform rotate-6">
                  <div className="w-full h-full bg-white rounded-3xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
                    <div className="flex-1 bg-orange-100 m-1 mt-8 rounded-3xl relative">
                      <div className="absolute top-4 left-4 text-xs font-bold">Good Morning</div>
                      <div className="absolute top-8 left-4 text-xs text-gray-600">Zimbabwean!</div>
                      <div className="absolute top-16 left-4 right-4 h-16 bg-orange-300 rounded-xl"></div>
                      <div className="absolute bottom-16 left-4 right-4 grid grid-cols-2 gap-2">
                        <div className="h-8 bg-orange-400 rounded"></div>
                        <div className="h-8 bg-orange-400 rounded"></div>
                      </div>
                      <div className="absolute bottom-8 left-4 right-4 h-6 bg-orange-500 rounded"></div>
                      <div className="absolute bottom-2 left-4 right-4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Casestudy Link */}
              <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-orange-200 transition-colors underline">
                Casestudy <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`group relative p-8 rounded-lg border-2 transition-all duration-500 hover:shadow-lg overflow-hidden ${
            darkMode ? 'bg-gray-800 border-gray-700 hover:bg-green-600' : 'bg-green-50 border-green-600 hover:bg-green-600'
          }`}>
            {/* Default Content */}
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
              <h3 className="text-4xl font-bold text-green-600 mb-4 group-hover:text-white">
                Food<br />Donation
              </h3>
              <p className="text-sm mb-6 leading-relaxed">
                A platform designed to reduce food waste by connecting food donors, such 
                as restaurants, grocery stores, and individuals, with NGOs that distribute 
                food to those in need. The platform facilitates the donation process, 
                ensuring that surplus food reaches those who need it the most, while 
                contributing to a more sustainable community.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium hover:text-green-600 transition-colors">
                Casestudy <ExternalLink size={16} className="ml-1" />
              </a>
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
              {/* Phone Mockups */}
              <div className="relative mb-8">
                {/* Phone 1 */}
                <div className="relative w-32 h-56 bg-black rounded-3xl p-1 transform -rotate-12 -translate-x-4">
                  <div className="w-full h-full bg-white rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute top-4 w-12 h-1 bg-black rounded-full"></div>
                    <div className="text-lg font-bold text-orange-500 mb-2">FOODIN.DO</div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Phone 2 */}
                <div className="absolute -top-4 left-12 w-32 h-56 bg-black rounded-3xl p-1 transform rotate-6">
                  <div className="w-full h-full bg-white rounded-3xl flex flex-col relative overflow-hidden">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black rounded-full"></div>
                    <div className="flex-1 bg-orange-100 m-1 mt-8 rounded-3xl relative">
                      <div className="absolute top-4 left-4 text-xs font-bold">Good Morning</div>
                      <div className="absolute top-8 left-4 text-xs text-gray-600">Zimbabwean!</div>
                      <div className="absolute top-16 left-4 right-4 h-16 bg-orange-300 rounded-xl"></div>
                      <div className="absolute bottom-16 left-4 right-4 grid grid-cols-2 gap-2">
                        <div className="h-8 bg-orange-400 rounded"></div>
                        <div className="h-8 bg-orange-400 rounded"></div>
                      </div>
                      <div className="absolute bottom-8 left-4 right-4 h-6 bg-orange-500 rounded"></div>
                      <div className="absolute bottom-2 left-4 right-4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Casestudy Link */}
              <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-orange-200 transition-colors underline">
                Casestudy <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Category Links */}
        <div className="flex space-x-8">
          <a href="#" className="inline-flex items-center text-lg font-medium hover:text-green-600 transition-colors">
            Mobile Application <ExternalLink size={20} className="ml-2" />
          </a>
          <a href="#" className="inline-flex items-center text-lg font-medium hover:text-green-600 transition-colors">
            Branding <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="fixed bottom-8 right-8 text-sm opacity-50 transform rotate-90 origin-bottom-right">
        DESIGN IS LIFE
      </div>
    </div>
  );
}