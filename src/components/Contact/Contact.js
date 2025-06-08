// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaCheckCircle,
  FaQuestionCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('consultation');

  const consultationSteps = [
    { step: 1, title: "Free Assessment", desc: "We analyze your current fitness level and goals" },
    { step: 2, title: "Custom Plan", desc: "Receive a personalized workout and nutrition strategy" },
    { step: 3, title: "Start Training", desc: "Begin your transformation journey with expert guidance" }
  ];

  const faqs = [
    { q: "How long are the training sessions?", a: "Each session is 60-90 minutes, depending on your program." },
    { q: "Do you provide nutrition plans?", a: "Yes! Custom meal plans are included with all programs." },
    { q: "What's included in the free consultation?", a: "Fitness assessment, goal setting, and program overview." }
  ];

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Ready to <span className="gradient-text">Transform</span>?
          </h2>
          <p className="section-subtitle">
            Choose how you'd like to connect and start your fitness journey
          </p>
        </div>

        <div className={`contact-content ${inView ? 'animate' : ''}`}>
          {/* Contact Options */}
          <div className="contact-options">
            <div className="contact-card primary-card">
              <div className="card-icon">
                <FaWhatsapp />
              </div>
              <h3>Instant Response</h3>
              <p>Get immediate answers to your questions</p>
              <a href="https://wa.me/917494940932" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-primary">
                <FaWhatsapp /> Message Now
              </a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Schedule a Call</h3>
              <p>Book a 15-minute consultation call</p>
              <a href="tel:+917494940932" className="btn btn-secondary">
                <FaPhone /> Call Now
              </a>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <FaInstagram />
              </div>
              <h3>Follow Journey</h3>
              <p>See transformations and daily tips</p>
              <a href="https://instagram.com/superhuman3366" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn-outline">
                <FaInstagram /> Follow
              </a>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="contact-tabs">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'consultation' ? 'active' : ''}`}
                onClick={() => setActiveTab('consultation')}
              >
                <FaCheckCircle /> How It Works
              </button>
              <button 
                className={`tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
                onClick={() => setActiveTab('faq')}
              >
                <FaQuestionCircle /> FAQ
              </button>
              <button 
                className={`tab-btn ${activeTab === 'hours' ? 'active' : ''}`}
                onClick={() => setActiveTab('hours')}
              >
                <FaClock /> Availability
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'consultation' && (
                <div className="consultation-process">
                  <h3>Your Transformation Process</h3>
                  <div className="process-steps">
                    {consultationSteps.map((step, index) => (
                      <div key={index} className="process-step">
                        <div className="step-number">{step.step}</div>
                        <div className="step-content">
                          <h4>{step.title}</h4>
                          <p>{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cta-box">
                    <p><strong>Ready to start?</strong> Your first consultation is completely free!</p>
                    <a href="https://wa.me/917494940932?text=Hi! I'd like to book my free consultation" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn btn-gradient">
                      Book Free Consultation
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="faq-section">
                  <h3>Frequently Asked Questions</h3>
                  <div className="faq-list">
                    {faqs.map((faq, index) => (
                      <div key={index} className="faq-item">
                        <h4>{faq.q}</h4>
                        <p>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                  <div className="faq-cta">
                    <p>Have more questions?</p>
                    <a href="https://wa.me/917494940932?text=Hi! I have some questions about your training programs" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn btn-outline">
                      Ask Anything
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'hours' && (
                <div className="availability-section">
                  <h3>Training Schedule</h3>
                  <div className="schedule-grid">
                    <div className="schedule-item">
                      <h4>Morning Sessions</h4>
                      <p>6:00 AM - 10:00 AM</p>
                      <span className="schedule-note">Most Popular</span>
                    </div>
                    <div className="schedule-item">
                      <h4>Evening Sessions</h4>
                      <p>5:00 PM - 9:00 PM</p>
                      <span className="schedule-note">Available</span>
                    </div>
                    <div className="schedule-item">
                      <h4>Weekend</h4>
                      <p>7:00 AM - 12:00 PM</p>
                      <span className="schedule-note">Limited Spots</span>
                    </div>
                  </div>
                  <div className="availability-cta">
                    <p>Sessions fill up quickly. Book your preferred time slot!</p>
                    <a href="https://wa.me/917494940932?text=Hi! I'd like to check availability for training sessions" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="btn btn-primary">
                      Check Availability
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;