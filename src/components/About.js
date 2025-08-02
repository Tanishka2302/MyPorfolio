import React from 'react';
import './css-files/about.css'; // make sure this path is correct
import profileImg from '../assets/profile.jpg'; // or the new image you uploaded

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        
        {/* Left side: Image and Info */}
        <div className="about-left">
  <img src={profileImg} alt="Tanishka Pandarpatte" className="about-image" />
  <div className="info-cards">
    <div><strong>Name:</strong> Tanishka Pandarpatte</div>
    <div>
      <strong>Email:</strong>
      <a 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishkapandharpatte@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        tanishkapandharpatte@gmail.com
      </a>
    </div>
    <div><strong>Location:</strong> Pune, India</div>
    <div><strong>Experience:</strong> Fresher</div>

    {/* Resume Button */}
    <div style={{ marginTop: '10px' }}>
      <a 
        href="https://drive.google.com/file/d/1-sIBkw6pY238JWb8NlhgzWCLRLzyssFY/view?usp=drive_link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>
    </div>
  </div>
</div>


        {/* Right side: Description */}
        <div className="about-right">
          <p><strong>🎓 Who am I?</strong></p>
          <p>
            I'm a 3rd-year 🎓 B.Tech student in Computer Engineering from  🏫 Sinhgad Institute Of Technology,Pune. I have completed my Diploma in Computer Technology from Adrash Institute Of Technology,Vita with 89.26 Aggrigate , first class distinction.I am passionate about full stack web development.
            I enjoy building responsive websites and creative UIs that offer excellent user experiences.
            
          </p>

          <p><strong>💻 What do I do?</strong></p>
          <p>
            I specialize in frontend technologies like React, CSS,HTML Javascript etc — 
            and I'm expanding into backend with Node.js Next.js and MongoDB.
          </p>

          <p><strong>🚀 What's next for me?</strong></p>
          <p>
            I'm currently working on real-world projects and sharpening my problem-solving skills,
            aiming to contribute to innovative tech teams and startups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
