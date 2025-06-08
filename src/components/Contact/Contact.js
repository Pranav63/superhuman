import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

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
          <div className="contact-info">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-description">
              Have questions? Want to book a free consultation? 
              Reach out through any of these channels:
            </p>

            <div className="contact-methods">
              <a href="https://wa.me/1234567890" className="contact-method">
                <div className="method-icon">
                  <FaWhatsapp />
                </div>
                <div className="method-details">
                  <h4>WhatsApp</h4>
                  <p>+1 (234) 567-890</p>
                </div>
              </a>

              <a href="https://instagram.com/superhuman_fitness" className="contact-method">
                <div className="method-icon">
                  <FaInstagram />
                </div>
                <div className="method-details">
                  <h4>Instagram</h4>
                  <p>@superhuman_fitness</p>
                </div>
              </a>

              <a href="mailto:info@superhuman.com" className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>info@superhuman.com</p>
                </div>
              </a>

              <div className="contact-method">
                <div className="method-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Downtown Fitness Center</p>
                </div>
              </div>
            </div>

            <div className="social-follow">
              <p>Follow us for daily motivation and tips:</p>
              <div className="social-buttons">
                <a href="https://instagram.com/superhuman_fitness" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-button">
                  <FaInstagram /> Instagram
                </a>
                <a href="https://wa.me/1234567890" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-button">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send us a message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your fitness goals..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;