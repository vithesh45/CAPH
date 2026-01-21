import React from 'react';
import { Search, Target, Rocket, TrendingUp } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import '../../styles/home.css';


const HowWeWork = () => {
  const steps = [
    {
      number: '01',
      icon: <Search size={28} />,
      title: 'Understand',
      description: 'We listen to your goals, challenges, and vision.'
    },
    {
      number: '02',
      icon: <Target size={28} />,
      title: 'Align',
      description: 'We align the right talent, tools, and strategy.'
    },
    {
      number: '03',
      icon: <Rocket size={28} />,
      title: 'Deliver',
      description: 'We execute with ownership and accountability.'
    },
    {
      number: '04',
      icon: <TrendingUp size={28} />,
      title: 'Scale',
      description: 'We continuously optimize and grow with you.'
    }
  ];

  return (
    <section className="section section-light how-section">
      <div className="container">
        <SectionTitle 
          title="Our Partnership Model"
          subtitle="HOW WE WORK"
        />
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;