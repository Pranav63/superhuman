// src/components/Contact/Contact.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Ready to <span className="gradient-text">Transform</span>?
          </h2>
          <p className="section-subtitle">
            Get in touch and start your journey to becoming Super Human
          </p>
        </div>

        <div className={`contact-content ${inView ? 'animate' : ''}`}>
          <div className="contact-info-full">
            <h3 className="info-title gradient-text">Let's Connect</h3>
            <p className="info-description">
              Have questions? Want to book a free consultation? 
              Reach out through any of these channels:
            </p>

            <div className="contact-methods">
              <a href="https://wa.me/917494940932" className="contact-method">
                <div className="method-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-details">
                  <h4>WhatsApp</h4>
                  <p>+91 7494940932</p>
                </div>
              </a>

              <a href="https://instagram.com/superhuman3366" className="contact-method">
                <div className="method-icon">
                  <FaInstagram />
                </div>
                <div className="method-details">
                  <h4>Instagram</h4>
                  <p>@superhuman3366</p>
                </div>
              </a>

              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>KFG Sports Club, Sector 99A, Gurugram, India</p>
                </div>
              </div>
            </div>

            <div className="contact-cta-section">
              <h3>Start Your Transformation Today!</h3>
              <p>Book your free consultation and take the first step towards a healthier, stronger you.</p>
              <div className="contact-buttons">
                <a href="https://wa.me/917494940932" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-primary">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
                <a href="https://instagram.com/superhuman3366" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn-secondary">
                  <FaInstagram /> Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;