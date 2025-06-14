// src/components/Footer/Footer.js
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-animation"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo gradient-text">SUPER HUMAN</h3>
            <p className="footer-tagline">Transform Your Body, Elevate Your Life</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="https://instagram.com/superhuman3366" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://wa.me/917494940932" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Super Human Fitness. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;