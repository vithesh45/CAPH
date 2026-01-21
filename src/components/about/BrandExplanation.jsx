import React from 'react';
import { Users, Target, Award } from 'lucide-react';
import './BrandExplanation.css';

const BrandExplanation = () => {
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
    <section className="brand-section section section-dark">
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

export default BrandExplanation;