import React from 'react';
import { Users, Target, TrendingUp } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import '../../styles/home.css';

const IntroSection = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: 'Alliance-Driven Approach',
      description: 'Built on trust, ownership, and long-term relationships.'
    },
    {
      icon: <Target size={32} />,
      title: 'Partner Hub Model',
      description: 'A central hub connecting technology, talent, and solutions.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Outcome-Focused Delivery',
      description: 'Every engagement is aligned to real business impact.'
    }
  ];

  return (
    <section className="section section-light intro-section">
      <div className="container">
        <SectionTitle 
          title="More Than a Service Provider. A True Partner."
          centered
        />
        <p className="intro-text">
          CAPH stands for Core Alliance and Partner Hub—a philosophy that defines how we work with our clients. We believe successful businesses are built through strong alliances, deep trust, and aligned execution.
        </p>
        <p className="intro-text">
          We don't operate as an external vendor. We act as an extension of your team—aligned to your goals, challenges, and growth journey.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;