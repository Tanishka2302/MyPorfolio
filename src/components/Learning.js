import React from "react";
import "./css-files/Learning.css";

const Learning = () => {
  return (
    <section className="learning-section">
      <h2 className="section-title">What I’m Learning Now</h2>

      <div className="learning-grid">

      <div className="learning-card">
  <h3>Next.js</h3>
  <p>Learning server-side rendering, routing, and production-grade React apps.</p>
</div>

<div className="learning-card">
  <h3>DevOps</h3>
  <p>Exploring CI/CD pipelines, Docker, deployment workflows, and cloud basics.</p>
</div>

<div className="learning-card">
  <h3>Advanced React</h3>
  <p>Performance optimization, architecture, and clean patterns.</p>
</div>

      </div>
    </section>
  );
};

export default Learning;
