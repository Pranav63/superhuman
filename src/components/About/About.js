import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <div className={`about-content ${inView ? 'animate' : ''}`}>
          <div className="about-text">
            <h2 className="section-title">
              Why Choose <span className="gradient-text">Super Human</span>
            </h2>
            <p className="about-description">
              At Super Human, we believe that everyone has the potential to achieve extraordinary fitness goals. 
              Our holistic approach combines cutting-edge training techniques with personalized nutrition plans 
              to help you unlock your full potential.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <span className="icon-gradient">💪</span>
                </div>
                <div className="feature-content">
                  <h3>Personalized Training</h3>
                  <p>Custom workout plans designed specifically for your body type, goals, and fitness level</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <span className="icon-gradient">🥗</span>
                </div>
                <div className="feature-content">
                  <h3>Nutrition Guidance</h3>
                  <p>Expert nutritional advice to fuel your body and maximize your training results</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <span className="icon-gradient">📊</span>
                </div>
                <div className="feature-content">
                  <h3>Progress Tracking</h3>
                  <p>Regular assessments to monitor your progress and adjust your program as needed</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <span className="icon-gradient">🎯</span>
                </div>
                <div className="feature-content">
                  <h3>Goal-Oriented</h3>
                  <p>Whether it's weight loss, muscle gain, or athletic performance, we'll help you achieve it</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
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