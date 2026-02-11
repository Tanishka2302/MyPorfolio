import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './css-files/Footer.css'; // make sure the styles are linked

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Tanishka Pandharpatte</h2>
            <p>Full Stack Developer </p>
          </div>

          <div className="social-links">
            <a href="https://github.com/Tanishka2302" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tanishka-pandharpatte" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Tanishka2302" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tanishka Pandharpatte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
