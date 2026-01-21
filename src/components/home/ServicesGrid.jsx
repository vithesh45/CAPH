import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Users, Briefcase, Settings, Shield } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import '../../styles/home.css';

const ServicesGrid = () => {
  const services = [
    {
      icon: <Laptop size={32} />,
      title: 'IT Consulting',
      description: 'Strategic guidance to design, modernize, and optimize your IT ecosystem.',
      link: '/services/it-consulting'
    },
    // {
    //   icon: <Users size={32} />,
    //   title: 'Staff Augmentation',
    //   description: 'Skilled professionals aligned to your technical and business needs.',
    //   link: '/services/staff-augmentation'
    // },
    // {
    //   icon: <Briefcase size={32} />,
    //   title: 'HR & Talent Services',
    //   description: 'Talent acquisition, workforce planning, and HR support.',
    //   link: '/services/hr-services'
    // },
    {
      icon: <Settings size={32} />,
      title: 'Custom Solutions',
      description: 'Tailored technology solutions built for your unique challenges.',
      link: '/services/custom-solutions'
    },
    {
      icon: <Shield size={32} />,
      title: 'Managed Services',
      description: 'Reliable, ongoing support so you can focus on growth.',
      link: '/services/managed-services'
    }
  ];

  return (
    <section className="section section-light services-section">
      <div className="container">
        <SectionTitle 
          title="End-to-End Services Designed Around You"
          subtitle="OUR SERVICES"
        />
        <p className="services-intro">
          CAPH offers a comprehensive range of IT and professional services to support businesses at every stage of growth.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className="service-link">Learn More →</span>
            </Link>
          ))}
        </div>

        <div className="services-cta">
          <Button variant="primary" size="large" href="/services">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;