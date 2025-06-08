// src/components/Hero/Hero.js
import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const parallaxRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      
      if (scrolled <= heroHeight) {
        // Video parallax
        if (videoRef.current) {
          videoRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Content parallax (opposite direction)
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${scrolled * -0.2}px)`;
        }
        
        // Background gradients parallax
        const gradientOverlay = heroRef.current?.querySelector('.gradient-overlay');
        if (gradientOverlay) {
          gradientOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero parallax-container" ref={heroRef}>
      <div className="hero-video-container">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="hero-video parallax-video"
            onError={handleVideoError}
          >
            <source src="/gym-video.mp4" type="video/mp4" />
            <source src="https://player.vimeo.com/external/291648067.sd.mp4?s=7f9a1b0e7f9a1b0e&profile_id=164" type="video/mp4" />
          </video>
        ) : (
          <div 
            ref={videoRef}
            className="hero-video parallax-video"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)'
            }}
          />
        )}
        <div className="video-overlay"></div>
      </div>

      <div className="hero-background">
        <div className="gradient-overlay parallax-gradient"></div>
        <div className="animated-bg"></div>
      </div>
      
      <div className="container" ref={parallaxRef}>
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll">
            Transform Your Body,<br />
            <span className="gradient-text">Elevate Your Life</span>
          </h1>
          
          <p className="hero-subtitle animate-on-scroll">
            Expert personal training and nutrition guidance to help you become the best version of yourself
          </p>
          
          <div className="hero-buttons animate-on-scroll">
            <button 
              className="btn btn-primary hero-cta"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => window.open('https://wa.me/917494940932', '_blank')}
            >
              Free Consultation
            </button>
          </div>
          
          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number gradient-text">20+</span>
              <span className="stat-label">Students</span>
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
      
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <span className="scroll-text">Scroll Down</span>
        <div className="scroll-down"></div>
      </div>
    </section>
  );
};

export default Hero;