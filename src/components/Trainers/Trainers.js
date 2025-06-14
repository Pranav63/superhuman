// src/components/Trainers/Trainers.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Trainers.css';

const Trainers = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const trainers = [
    {
      id: 1,
      name: "Sumit Yadav",
      role: "Fitness & Resistance Training Expert",
      specialties: ["Sport-Focused Training", "Strength Training", "Fat Loss", "HIIT"],
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
      instagram: "@superhuman3366",
      whatsapp: "+917494940932",
      bio: "10+ years of experience transforming bodies and minds. Specialized in athletic performance and sustainable fat loss strategies."
    },
    {
      id: 2,
      name: "Mrs. Bhumika",
      role: "Certified Nutritionist",
      specialties: ["Meal Planning", "Sports Nutrition", "Weight Management", "Gut Health"],
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
      instagram: "@superhuman3366",
      whatsapp: "+917494940932",
      bio: "Passionate about creating sustainable nutrition plans that fuel your body and enhance your training results."
    }
  ];

  return (
    <section id="trainers" className="section trainers" ref={ref}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Meet Your <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="section-subtitle">
            Dedicated professionals committed to your transformation journey
          </p>
        </div>

        <div className={`trainers-grid ${inView ? 'animate' : ''}`}>
          {trainers.map((trainer, index) => (
            <div key={trainer.id} className="trainer-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="trainer-image">
                <img src={trainer.image} alt={trainer.name} />
                <div className="trainer-overlay">
                  <div className="social-links">
                    <a href={`https://instagram.com/${trainer.instagram.substring(1)}`} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="social-link">
                      <FaInstagram />
                    </a>
                    <a href={`https://wa.me/${trainer.whatsapp}`} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="social-link">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="trainer-info">
                <h3 className="trainer-name">{trainer.name}</h3>
                <p className="trainer-role gradient-text">{trainer.role}</p>
                <p className="trainer-bio">{trainer.bio}</p>
                
                <div className="trainer-specialties">
                  {trainer.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">{specialty}</span>
                  ))}
                </div>
                
                <div className="trainer-cta">
                  <a href={`https://wa.me/${trainer.whatsapp}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-primary">
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;