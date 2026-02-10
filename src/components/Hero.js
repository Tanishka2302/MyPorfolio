import React from 'react';
import { Link } from 'react-scroll';
import './css-files/hero.css';



const Hero = () => {
  return (
    <section id="home" className="bg-[#F9F4F2] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left space-y-6 max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Hi, I'm <span className="text-[#A173A0]">Tanishka Pandarpatte</span>
        </h1>

        <p className="text-xl text-gray-600 font-medium">
        Full Stack Web Developer
        </p>

        <p className="text-md text-gray-500 max-w-xl">
        From backend APIs to polished UIs, I love building projects that solve real problems and look good doing it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
        <div className="hero-buttons">
  <Link
    to="projects"
    smooth={true}
    duration={500}
    className="nav-btn nav-btn-primary"
  >
    View My Work
  </Link>

  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="nav-btn nav-btn-outline"
  >
    Let's Connect
  </Link>
</div>
</div>

      
        </div>

      </div>
    </section>
  );
};

export default Hero;