import React from 'react';
import '../../styles/common.css';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-heading">{title}</h2>
    </div>
  );
};

export default SectionTitle;