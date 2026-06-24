import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <picture>
        <source media="(max-width: 768px)" srcSet="/mobilehero.png" />
        <img
          src="/desktophero.png"
          alt="Wedding Invitation Composition"
          className="hero-image"
        />
      </picture>
    </section>
  );
};

export default Hero;
