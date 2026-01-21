import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import Button from '../components/common/Button';
import '../styles/pages.css';

export const PartnershipModel = () => {
  const features = [
    'Flexible contracts tailored to your needs',
    'Transparent delivery and communication',
    'Long-term collaboration mindset',
    'Business-aligned KPIs and metrics'
  ];

  return (
    <div className="partnership-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Our Partnership-First Engagement Model</h1>
          <p className="page-hero-subtitle">
            At CAPH, partnership defines how we work. We integrate seamlessly with your teams, align with your goals, and take shared ownership of outcomes.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="content-max">
            <h2 className="content-heading">Why Partnership Over Vendor?</h2>
            <p className="content-text">
              Traditional vendor relationships often focus on transactions rather than outcomes. At CAPH, we believe in building lasting alliances where your success becomes our success. We don't just deliver services—we become an extension of your team, invested in your long-term growth and transformation.
            </p>

            <h2 className="content-heading mt-4">Our Partnership Principles</h2>
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle size={24} className="feature-check" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};