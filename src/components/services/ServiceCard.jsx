import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="service-card-component">
      <div className="service-card-icon">
        {icon}
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <span className="service-card-link">Learn More →</span>
    </Link>
  );
};

export default ServiceCard;