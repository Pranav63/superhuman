import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="animated-bg"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll">
            Transform Your Body,<br />
            <span className="gradient-text">Elevate Your Life</span>
          </h1>
          
          <p className="hero-subtitle animate-on-scroll">
            Expert personal training and nutrition guidance to help you become the best version of yourself
          </p>
          
          <div className="hero-buttons animate-on-scroll">
            <button className="btn btn-primary hero-cta">
              Start Your Journey
            </button>
            <button className="btn btn-secondary">
              Free Consultation
            </button>
          </div>
          
          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number gradient-text">500+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number gradient-text">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number gradient-text">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-down"></div>
      </div>
    </section>
  );
};

export default Hero;