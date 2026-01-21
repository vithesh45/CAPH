import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Users, Briefcase, Settings, Shield, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import '../styles/pages.css';


const Services = () => {
  const services = [
    {
      icon: <Laptop size={40} />,
      title: 'IT Consulting',
      description: 'Strategic guidance to design, modernize, and optimize your IT ecosystem.',
      link: '/services/it-consulting'
    },
    {
      icon: <Users size={40} />,
      title: 'Staff Augmentation',
      description: 'Skilled professionals aligned to your technical and business needs.',
      link: '/services/staff-augmentation'
    },
    {
      icon: <Briefcase size={40} />,
      title: 'HR & Talent Services',
      description: 'Talent acquisition, workforce planning, and HR support.',
      link: '/services/hr-services'
    },
    {
      icon: <Settings size={40} />,
      title: 'Custom Solutions',
      description: 'Tailored technology solutions built for your unique challenges.',
      link: '/services/custom-solutions'
    },
    {
      icon: <Shield size={40} />,
      title: 'Managed Services',
      description: 'Reliable, ongoing support so you can focus on growth.',
      link: '/services/managed-services'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="services-page-title">Services Built Around Partnership</h1>
          <p className="services-page-subtitle">
            CAPH provides a comprehensive portfolio of IT and professional services designed to adapt to your needs, scale with your business, and deliver measurable value.
          </p>
          <Button variant="primary" size="large" href="/contact">
            Talk to Our Experts
          </Button>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="services-detailed-grid">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="service-detailed-card">
                <div className="service-detailed-icon">{service.icon}</div>
                <div className="service-detailed-content">
                  <h3 className="service-detailed-title">{service.title}</h3>
                  <p className="service-detailed-description">{service.description}</p>
                  <span className="service-detailed-link">
                    Learn More <ArrowRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
