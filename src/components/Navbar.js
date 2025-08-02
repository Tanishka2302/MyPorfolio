import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import TLogo from '../assets/T.png';
 // Assuming your CSS file is named like this

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo on the left */}
        <Link to="home" className="nav-logo" smooth={true} duration={500}>
          <img src={TLogo} alt="Logo" className="logo-img" />
        </Link>

        {/* Hamburger Icon for mobile */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
