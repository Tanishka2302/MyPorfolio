import React from 'react';
import './css-files/Skills.css';

const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'EJS', icon: 'fab fa-figma' },
  { name: 'TypeScript', icon: 'fab fa-figma' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'Postgress SQL', icon: 'fas fa-database' },
  { name: 'MySQL', icon: 'fab fa-figma' },
  { name: 'PyCharam', icon: 'fas fa-fire' },
  { name: 'Eclipse', icon: 'fab fa-figma' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-figma' },
  { name: 'Python', icon: 'fab fa-figma' },
  { name: 'Java', icon: 'fab fa-figma' },
  { name: 'C/C++', icon: 'fab fa-figma' },
  { name: 'Tailwind CSS', icon: 'fab fa-figma' },
];

const Skills = () => {
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
    </section>
  );
};

export default Skills;
