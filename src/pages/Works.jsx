import React from 'react';
import phoneMockup from '../assets/image.png';

const projects = [
  {
    title: 'Food Donation App',
    description:
      'A platform designed to reduce food waste by connecting food donors, such as restaurants, grocery stores, and individuals, with NGOs that distribute food to those in need. The platform facilitates the donation process, ensuring that surplus food reaches those who need it the most, while contributing to a more sustainable community.',
    link: '#',
  },
  {
    title: 'Food Donation App',
    description:
      'A platform designed to reduce food waste by connecting food donors, such as restaurants, grocery stores, and individuals, with NGOs that distribute food to those in need. The platform facilitates the donation process, ensuring that surplus food reaches those who need it the most, while contributing to a more sustainable community.',
    link: '#',
  },
  {
    title: 'Food Donation App',
    description:
      'A platform designed to reduce food waste by connecting food donors, such as restaurants, grocery stores, and individuals, with NGOs that distribute food to those in need. The platform facilitates the donation process, ensuring that surplus food reaches those who need it the most, while contributing to a more sustainable community.',
    link: '#',
  },
];

const categories = [
  'Mobile Application',
  'Branding',
];

const Works = () => {
  return (
    <section className="min-h-[80vh] w-full px-4 md:px-16 py-12 relative bg-[radial-gradient(circle_at_60%_40%,#d1fae5_0%,#f0fdfa_100%)] dark:bg-[#18181b] transition-colors">
      {/* Faded Works Heading */}
      <h1 className="absolute left-4 top-8 text-[7vw] font-serif font-bold text-gray-300 opacity-30 select-none pointer-events-none z-0">Works</h1>
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 mt-8">Website Projects</h2>
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <div key={idx} className="relative overflow-hidden border-2 border-green-800 rounded-none p-6 md:p-8 bg-transparent flex flex-col h-full transition-colors w-full max-w-full group" style={{ width: '39.375rem', height: '25.85rem', minWidth: '340px', maxWidth: '100%' }}>
              {/* Card Content */}
              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-green-900 mb-4 leading-none">{project.title}</h3>
                <p className="text-gray-800 text-sm md:text-base font-normal mb-6" style={{ color: '#222', fontWeight: 400 }}>{project.description}</p>
                <a href={project.link} className="font-serif font-bold underline underline-offset-2 text-gray-800 flex items-center gap-1 text-base" style={{ color: '#222' }}>
                  Casetudy
                  <span className="arrow-rotate">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 left-0 top-0 w-full h-full bg-green-900 flex flex-col justify-center items-center transition-all duration-700 ease-in-out z-20 opacity-0 group-hover:opacity-100 group-hover:left-0">
                <img src={phoneMockup} alt="Phone Mockup" className="w-2/3 max-w-xs mb-8 drop-shadow-xl transform -translate-x-[80%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
                <a href={project.link} className="font-serif font-bold underline underline-offset-2 text-white flex items-center gap-1 text-2xl">
                  Casestudy
                  <span className="arrow-rotate">
                    <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Categories */}
        <div className="flex flex-wrap gap-8 text-lg font-serif font-medium mt-8">
          {categories.map((cat, idx) => (
            <span key={idx} className="hover:underline flex items-center gap-1">
              {cat}
              <span className="arrow-rotate">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works; 