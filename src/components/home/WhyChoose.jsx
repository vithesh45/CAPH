import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import '../../styles/home.css';

const WhyChoose = () => {
  const reasons = [
    'Partnership-first mindset',
    'Deep understanding of client business goals',
    'Flexible engagement models',
    'Experienced professionals across domains',
    'Transparent communication and execution',
    'Commitment to long-term success'
  ];

  return (
    <section className="section section-dark why-section">
      <div className="container">
        <SectionTitle 
          title="Why Organizations Choose CAPH"
          subtitle="OUR ADVANTAGE"
        />
        
        <div className="why-content">
          <div className="why-list">
            {reasons.map((reason, index) => (
              <div key={index} className="why-item">
                <CheckCircle size={24} className="why-icon" />
                <p className="why-text">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;