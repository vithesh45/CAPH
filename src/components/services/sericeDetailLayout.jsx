import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import '../../styles/services.css'

const ServiceDetailLayout = ({ service }) => {
  if (!service) {
    return (
      <div className="error-container">
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Button variant="primary" size="medium" href="/services">
          Back to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="service-detail-layout">
      <section className="service-detail-hero-section">
        <div className="container">
          <h1 className="service-hero-title">
            {service.title} That Aligns With Your Business Goals
          </h1>
          <Button variant="primary" size="large" href="/contact">
            Get Started
          </Button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="service-layout-content">
            {/* Overview */}
            <div className="layout-section">
              <h2 className="layout-heading">Service Overview</h2>
              <p className="layout-text">{service.overview}</p>
            </div>

            {/* Offerings */}
            <div className="layout-section">
              <h2 className="layout-heading">What We Offer</h2>
              <ul className="layout-list">
                {service.offerings.map((item, index) => (
                  <li key={index}>
                    <CheckCircle size={20} className="layout-list-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Value */}
            <div className="layout-section">
              <h2 className="layout-heading">How CAPH Adds Value</h2>
              <div className="layout-value-grid">
                {service.value.map((item, index) => (
                  <div key={index} className="layout-value-card">
                    <CheckCircle size={24} className="layout-value-icon" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div className="layout-section">
              <h2 className="layout-heading">Ideal For</h2>
              <div className="layout-ideal-grid">
                {service.idealFor.map((item, index) => (
                  <div key={index} className="layout-ideal-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="layout-cta">
              <h2>Ready to Move Forward?</h2>
              <p>Let's discuss how we can support your goals.</p>
              <Button variant="primary" size="large" icon href="/contact">
                Speak with a Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;