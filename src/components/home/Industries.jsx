import React from 'react';
import { Code, Building2, Rocket, Store, Globe } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import '../../styles/home.css';


const Industries = () => {
  const industries = [
    { name: 'IT & Software', icon: <Code size={24} /> },
    { name: 'Enterprises', icon: <Building2 size={24} /> },
    { name: 'Startups & Scale-ups', icon: <Rocket size={24} /> },
    { name: 'SMBs', icon: <Store size={24} /> },
    { name: 'Global & Distributed Teams', icon: <Globe size={24} /> }
  ];

  return (
    <section className="section section-dark industries-section">
      <div className="container">
        <SectionTitle 
          title="Serving Businesses Across Industries"
          subtitle="INDUSTRIES"
        />
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <p className="industry-name">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;