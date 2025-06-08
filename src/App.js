import React, { useEffect } from 'react';
import './App.css';
import './styles/globals.css';
import './styles/variables.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Trainers from './components/Trainers/Trainers';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Trainers />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;