// src/components/About/About.js
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const featuresRef = useRef(null);
  const revealRef = useRef(null);
  const imageRef = useRef(null);
  const decorationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const features = featuresRef.current?.querySelectorAll('.feature');
    features?.forEach((feature) => observer.observe(feature));

    const revealElements = revealRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
    revealElements?.forEach((element) => observer.observe(element));

    // Parallax effect for About section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const aboutSection = ref.current;
      
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          // Image parallax
          if (imageRef.current) {
            const speed = (rect.top - window.innerHeight) * 0.2;
            imageRef.current.style.transform = `translateY(${speed}px)`;
          }
          
          // Decoration parallax
          if (decorationRef.current) {
            const decorations = decorationRef.current.querySelectorAll('.decoration-circle');
            decorations.forEach((decoration, index) => {
              const speed = (rect.top - window.innerHeight) * (0.1 + index * 0.05);
              decoration.style.transform = `translateY(${speed}px) rotate(${speed * 0.5}deg)`;
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return (
    <section id="about" className="section about parallax-section" ref={ref}>
      <div className="about-decoration" ref={decorationRef}>
        <div className="decoration-circle decoration-1 parallax-decoration"></div>
        <div className="decoration-circle decoration-2 parallax-decoration"></div>
      </div>
      
      <div className="container" ref={revealRef}>
        <div className={`about-content ${inView ? 'animate' : ''}`}>
          <div className="about-text">
            <h2 className="section-title reveal">
              Why Choose <span className="gradient-text">Super Human</span>
            </h2>
            <p className="about-description reveal">
              At Super Human, we believe that everyone has the potential to achieve extraordinary fitness goals. 
              Our holistic approach combines cutting-edge training techniques with personalized nutrition plans 
              to help you unlock your full potential.
            </p>
            
            <div className="about-features" ref={featuresRef}>
              <div className="feature reveal-left">
                <div className="feature-icon glow">
                  <span className="icon-gradient">💪</span>
                </div>
                <div className="feature-content">
                  <h3>Personalized Training</h3>
                  <p>Custom workout plans designed specifically for your body type, goals, and fitness level</p>
                </div>
              </div>
              
              <div className="feature reveal-left">
                <div className="feature-icon glow">
                  <span className="icon-gradient">🥗</span>
                </div>
                <div className="feature-content">
                  <h3>Nutrition Guidance</h3>
                  <p>Expert nutritional advice to fuel your body and maximize your training results</p>
                </div>
              </div>
              
              <div className="feature reveal-left">
                <div className="feature-icon glow">
                  <span className="icon-gradient">📊</span>
                </div>
                <div className="feature-content">
                  <h3>Progress Tracking</h3>
                  <p>Regular assessments to monitor your progress and adjust your program as needed</p>
                </div>
              </div>
              
              <div className="feature reveal-left">
                <div className="feature-icon glow">
                  <span className="icon-gradient">🎯</span>
                </div>
                <div className="feature-content">
                  <h3>Goal-Oriented</h3>
                  <p>Whether it's weight loss, muscle gain, or athletic performance, we'll help you achieve it</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image reveal-scale" ref={imageRef}>
            <div className="image-container hover-lift parallax-image">
              <div className="image-gradient"></div>
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop" alt="Modern gym interior" />
            </div>
            <div className="floating-card">
              <span className="card-number gradient-text">2</span>
              <span className="card-text">Expert Trainers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;