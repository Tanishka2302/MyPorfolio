import React from 'react';
import './css-files/project.css'; // Make sure this file exists

import deepfakeImg from '../assets/deepfakeImg.png'; // Example (add your images!)
import ecommerceImg from '../assets/ecommerceImg.png';
import mazeImg from '../assets/mazeImg.png';
import buspassImg from '../assets/buspassImg.png';
import linkliteImg from '../assets/linkliteImg.png';
import todoImg from '../assets/todoImg.png';
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Deepfake Detection Using AI',
      description:
        'AI-powered system to detect deepfakes with heatmaps, image analysis, and secure record management.',
      image: deepfakeImg,
      technologies: ['Flask', 'TensorFlow', 'SQLAlchemy', 'Python'],
      github: 'https://github.com/Tanishka2302/deepfake-detection',
    },
    {
      id: 2,
      title: 'Ecommerce Website (In Progress)',
      description:
        'Full-stack e-commerce platform with user and admin roles, product management, and authentication.',
      image: ecommerceImg,
      technologies: ['HTML', 'CSS', 'JavaScript','NodeJS'],
      github: 'https://github.com/Tanishka2302/ecommerce_website',
    },
    {
      id: 3,
      title: 'Maze Solver',
      description:
        'Interactive visualizer for BFS/DFS algorithms with animated traversal and maze editing.',
      image: mazeImg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Tanishka2302/maze-solver1',
    },
    {
      id: 4,
      title: 'Online Bus Pass Management System',
      description:
        'Web-based system for student pass registration, route selection, and secure digital generation.',
      image: buspassImg,
      technologies: ['JSP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
      github: 'https://github.com/Tanishka2302/Bus-Pass-Generator',
    },
    {
      id: 4,
      title: 'LinkLite',
      description:
        'A mini LinkedIn clone with user authentication, profile management, and post sharing using a full stack setup.',
      image: linkliteImg, // Replace with actual imported image reference
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Tanishka2302/LinkLite', // Replace with your actual repo link
    },
    {
      id: 5,
      title: 'ToDo App',
      description:
        'A simple full stack task manager that allows users to add, view, edit, and delete tasks. Built using React for the frontend and Node.js with PostgreSQL for the backend.',
      image: todoImg, // Replace with actual imported image reference
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Tanishka2302/todo-app',
    }
    
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
