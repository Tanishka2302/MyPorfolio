import React from 'react';
import './css-files/Skills.css';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Nextjs', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Express', icon: 'fab fa-figma' },
  { name: 'TypeScript', icon: 'fab fa-figma' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Postgress SQL', icon: 'fas fa-database' },
  { name: 'MySQL', icon: 'fab fa-figma' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-figma' },
  { name: 'Python', icon: 'fab fa-figma' },
  { name: 'Java', icon: 'fab fa-figma' },
  { name: 'C/C++', icon: 'fab fa-figma' },
  { name: 'Tailwind CSS', icon: 'fab fa-figma' },
  { name: 'MongoDB', icon: 'fab fa-figma' },
];

const Skills = () => {
  const handleRedirect = () => {
    window.open('https://drive.google.com/drive/folders/13z_DTjrJj1nogSDak93cCHDMd9lR8qxd?usp=drive_link', '_blank');
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={`${skill.icon} skill-icon`}></i>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Button to redirect */}
      <div className="certification-button-container">
        <button className="certification-button" onClick={handleRedirect}>
          View Certifications
        </button>
      </div>
    </section>
  );
};

export default Skills;
