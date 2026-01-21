import React from 'react';
import Button from '../common/Button';
import '../../styles/home.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Core Alliance for Technology, Talent, and Growth.
          </h1>
          <p className="hero-subtitle">
            CAPH (Core Alliance and Partner Hub) partners with organizations to deliver IT consulting, staffing, and professional services—built on trust, collaboration, and long-term value.
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="large" icon href="/contact">
              Partner with CAPH
            </Button>
            {/* <Button variant="secondary" size="large" href="/services">
              Explore Our Services
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;