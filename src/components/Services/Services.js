import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 1,
      title: "Personal Training",
      description: "One-on-one customized training sessions tailored to your specific goals and fitness level",
      features: [
        "Personalized workout plans",
        "Form correction and technique",
        "Progress tracking",
        "Flexible scheduling"
      ],
      price: "Starting at $80/session",
      popular: true
    },
    {
      id: 2,
      title: "Nutrition Coaching",
      description: "Comprehensive nutrition planning and guidance to complement your fitness journey",
      features: [
        "Custom meal plans",
        "Macro tracking guidance",
        "Weekly check-ins",
        "Recipe suggestions"
      ],
      price: "Starting at $150/month"
    },
    {
      id: 3,
      title: "Transformation Package",
      description: "Complete 12-week body transformation program combining training and nutrition",
      features: [
        "3x weekly training sessions",
        "Full nutrition plan",
        "24/7 support",
        "Progress photos & measurements"
      ],
      price: "Starting at $1,200"
    },
    {
      id: 4,
      title: "Athletic Performance",
      description: "Sport-specific training to enhance your athletic performance and prevent injuries",
      features: [
        "Sport-specific drills",
        "Strength & conditioning",
        "Mobility work",
        "Recovery protocols"
      ],
      price: "Starting at $100/session"
    }
  ];

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect program to achieve your fitness goals
          </p>
        </div>

        <div className={`services-grid ${inView ? 'animate' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card ${service.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {service.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="service-footer">
                <p className="service-price gradient-text">{service.price}</p>
                <button className="btn btn-primary service-btn">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta text-center">
          <p className="cta-text">
            Not sure which program is right for you?
          </p>
          <button className="btn btn-secondary">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;