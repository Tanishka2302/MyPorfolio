import React from 'react';
import './css-files/project.css';

import deepfakeImg from '../assets/deepfakeImg.png';
import ecommerceImg from '../assets/ecommerceImg.png';
import mazeImg from '../assets/mazeImg.png';
import buspassImg from '../assets/buspassImg.png';
import linkliteImg from '../assets/linkliteImg.png';
import todoImg from '../assets/todoImg.png';
import chatAppImg from '../assets/chatAppImg.png';
import hrRefereeImg from '../assets/hrRefereeImg.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HR Referee System',
      description:
        'A role-based HR management system for tracking employee records, verification workflows, and referee approvals with secure login.',
      image: hrRefereeImg,
      technologies: ['React', 'Node.js', 'Express', 'Postgress', 'Google OAuth'],
      github: 'https://github.com/Tanishka2302/bg-verification-chat',
      live: 'https://bg-verification-chat.onrender.com',
    },
    {
      id: 2,
      title: 'Real-Time Chat Application',
      description:
        'A live chat platform supporting real-time messaging, user sessions, and socket-based communication for instant interaction.',
      image: chatAppImg,
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'Postgress'],
      github: 'https://github.com/Tanishka2302/Chat-Application',
      live: 'https://chat-application-1-r893.onrender.com',
    },
    {
      id: 3,
      title: 'Full Stack To-Do Application',
      description:
        'A full stack task management app with authentication, CRUD operations, and persistent storage. Users can organize, update, and track daily tasks in real time.',
      image: todoImg,
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Tanishka2302/TODO-APPLICATION',
      live: 'https://todo-application-1lkt.onrender.com',
    },
    {
      id: 4,
      title: 'LinkLite',
      description:
        'A mini LinkedIn clone with user authentication, profile management, and post sharing using a full stack setup.',
      image: linkliteImg,
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
      github: 'https://github.com/Tanishka2302/LinkLite',
      live: 'https://linklite-frontend.onrender.com',
    },
    {
      id: 5,
      title: 'Maze Solver',
      description:
        'Interactive visualizer for BFS/DFS algorithms with animated traversal and maze editing.',
      image: mazeImg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Tanishka2302/maze-solver1',
    },
    {
      id: 6,
      title: 'Online Bus Pass Management System',
      description:
        'Web-based system for student pass registration, route selection, and secure digital generation.',
      image: buspassImg,
      technologies: ['JSP', 'HTML', 'CSS', 'MySQL', 'JavaScript'],
      github: 'https://github.com/Tanishka2302/Bus-Pass-Generator',
    },
    {
      id: 7,
      title: 'Ecommerce Website (In Progress)',
      description:
        'Full-stack e-commerce platform with user and admin roles, product management, and authentication.',
      image: ecommerceImg,
      technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS'],
      github: 'https://github.com/Tanishka2302/ecommerce_website',
    },
    {
      id: 8,
      title: 'Deepfake Detection Using AI',
      description:
        'AI-powered system to detect deepfakes with heatmaps, image analysis, and secure record management.',
      image: deepfakeImg,
      technologies: ['Flask', 'TensorFlow', 'SQLAlchemy', 'Python'],
      github: 'https://github.com/Tanishka2302/deepfake-detection',
    },
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

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      Live Demo
                    </a>
                  )}
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
