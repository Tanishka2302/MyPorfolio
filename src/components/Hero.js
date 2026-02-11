import React from 'react';
import { Link } from 'react-scroll';
import './css-files/hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">

      <div className="hero-grid">

        {/* LEFT TEXT */}
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Tanishka Pandarpatte</span>
          </h1>

          <p className="hero-role">
            Full Stack Web Developer
          </p>

          <p className="hero-desc">
            From backend APIs to polished UIs, I love building projects
            that solve real problems and look good doing it.
          </p>

          <div className="hero-buttons">
            <Link to="projects" smooth duration={500} className="nav-btn nav-btn-primary">
              View My Work
            </Link>

            <Link to="contact" smooth duration={500} className="nav-btn nav-btn-outline">
              Let's Connect
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="visual-card">
          <div className="line"></div>
          <div className="line short"></div>
          <div className="line"></div>
          <div className="line tiny"></div>
        </div>
        <div className="floating-tags">
  <span>React</span>
  <span>Node</span>
  <span>JavaScript</span>
  <span>CSS</span>
  <span>MongoDB</span>
</div>

      </div>
    </section>
  );
};

export default Hero;
