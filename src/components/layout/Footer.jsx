import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';
import '../../styles/layout.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-about">
            <h3 className="footer-logo">CAPH</h3>
            <p className="footer-description">
              Core Alliance and Partner Hub delivering IT consulting, staffing, and professional services through trusted partnerships.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@caph.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/partnership-model">Partnership Model</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/it-consulting">IT Consulting</Link></li>
              <li><Link to="/services/staff-augmentation">Staff Augmentation</Link></li>
              <li><Link to="/services/hr-services">HR & Talent Services</Link></li>
              <li><Link to="/services/custom-solutions">Custom Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail size={16} />
                <a href="mailto:info@caph.com">info@caph.com</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CAPH. All rights reserved.</p>

          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
       <a
            href="https://www.elvatech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            <span>Designed & Developed by Elva Tech</span>
            <img src="/Elva.svg" alt="Elva Tech" />
          </a>
      </div>
    </footer>
  );
};

export default Footer;