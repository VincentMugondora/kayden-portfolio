import './App.css'

function App() {
  return (
    <div className="hero-bg">
      <nav className="navbar">
        <div className="navbar-logo">Munyaradzi<span className="navbar-dot">.</span></div>
        <ul className="navbar-links">
          <li><a href="#">Works</a></li>
          <li><a href="#">Contributions</a></li>
          <li><a href="#">Talks</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Contact me</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="resume-btn">My Resume</button>
          <span className="navbar-theme"><svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#111" strokeWidth="2"/><path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 1 0-20z" fill="#111"/></svg></span>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title-wrapper">
            <h1 className="hero-title">Hi, I am Munya</h1>
            <span className="hero-circular-text">DESIGN IS LIFE · DESIGN IS LIFE ·</span>
          </div>
          <p className="hero-desc">
            I'm a Senior Product Designer (UI, UX), and a Design mentor. I am passionate about creating a user-centered design, gathering and translating user data into design decisions and products.
          </p>
          <div className="hero-links">
            <a href="#" className="hero-link">Resume ↗</a>
            <a href="#" className="hero-link">Linkedin ↗</a>
            <a href="#" className="hero-link">Behance ↗</a>
          </div>
        </div>
        <div className="hero-img-wrapper">
          <img src="https://i.ibb.co/3T1Qw6G/memoji.png" alt="Munya Memoji" className="hero-img" />
        </div>
        <div className="scroll-indicator">
          <span>SCROLL</span>
          <span className="scroll-arrow">↗</span>
        </div>
      </div>
    </div>
  )
}

export default App
