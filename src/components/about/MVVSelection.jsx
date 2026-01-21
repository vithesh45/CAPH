import React from 'react';
import './MVVSection.css';

const MVVSection = () => {
  return (
    <section className="mvv-section section section-light">
      <div className="container">
        <h2 className="section-title-center">Mission, Vision & Values</h2>
        <div className="mvv-grid">
          <div className="mvv-card">
            <h3 className="mvv-title">Mission</h3>
            <p className="mvv-text">
              To empower businesses through trusted partnerships and impactful solutions.
            </p>
          </div>
          <div className="mvv-card">
            <h3 className="mvv-title">Vision</h3>
            <p className="mvv-text">
              To be the most reliable core alliance for organizations worldwide.
            </p>
          </div>
          <div className="mvv-card full-width">
            <h3 className="mvv-title">Values</h3>
            <ul className="values-list">
              <li>Trust & Transparency</li>
              <li>Ownership & Accountability</li>
              <li>Collaboration</li>
              <li>Excellence in Execution</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVVSection;