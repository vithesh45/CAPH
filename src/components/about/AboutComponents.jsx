import React from 'react';
import { Users, Target, Award } from 'lucide-react';
import '../../styles/about.css';

export const CompanyIntro = () => {
  return (
    <section className="section section-light company-intro">
      <div className="container">
        <div className="intro-content">
          <h1 className="page-title">About CAPH</h1>
          <p className="intro-text-large">
            CAPH is a partnership-driven consulting and services firm built on the belief that strong alliances create lasting success. Our approach is rooted in collaboration, trust, and a deep commitment to our clients' goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export const BrandExplanation = () => {
  const meanings = [
    {
      icon: <Users size={40} />,
      title: 'Core Alliance',
      description: 'Core Alliance represents the strong foundational partnership between our founders and clients. It reflects our commitment to collaboration, trust, and excellence, and our focus on building deep, meaningful relationships that last.'
    },
    {
      icon: <Target size={40} />,
      title: 'Partner Hub',
      description: 'Partner Hub positions CAPH as a central point of collaboration—bringing together customers, employees, and stakeholders to achieve shared objectives. We operate as an extension of our clients\' teams, delivering end-to-end solutions.'
    },
    {
      icon: <Award size={40} />,
      title: 'Our Alignment',
      description: 'The CAPH philosophy emphasizes partnership, value delivery, and strategic enablement. We help businesses navigate challenges, adapt to change, and achieve transformative outcomes.'
    }
  ];

  return (
    <section className="section section-dark brand-section">
      <div className="container">
        <h2 className="section-title-center">Core Alliance and Partner Hub</h2>
        <div className="meanings-grid">
          {meanings.map((item, index) => (
            <div key={index} className="meaning-card">
              <div className="meaning-icon">{item.icon}</div>
              <h3 className="meaning-title">{item.title}</h3>
              <p className="meaning-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MVVSection = () => {
  return (
    <section className="section section-light mvv-section">
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