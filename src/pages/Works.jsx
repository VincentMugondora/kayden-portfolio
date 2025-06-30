import React from 'react';

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
            <div key={idx} className="border-2 border-green-800 rounded-none p-6 md:p-8 bg-transparent flex flex-col h-full transition-colors w-full max-w-full" style={{ minHeight: '200px', minWidth: '340px' }}>
              <h3 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-6 leading-none">{project.title}</h3>
              <p className="text-gray-800 text-base md:text-lg font-normal mb-8" style={{ color: '#222', fontWeight: 400 }}>{project.description}</p>
              <a href={project.link} className="font-serif font-bold underline underline-offset-2 text-gray-800 flex items-center gap-1 text-lg" style={{ color: '#222' }}>
                Casetudy
                <span className="arrow-rotate">
                  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </a>
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