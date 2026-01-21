import React from 'react';
import Button from '../common/Button';
import '../../styles/home.css';

const CTABand = () => {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Looking for a Partner, Not Just a Vendor?</h2>
          <p className="cta-subtitle">
            Let's build a strong alliance and achieve meaningful outcomes—together.
          </p>
          <Button variant="primary" size="large" icon href="/contact">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABand;