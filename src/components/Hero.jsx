import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale image from 1x to 1.3x as we scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  // Fade out text overlay as we scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section ref={containerRef} className="hero-scroll-container">
      <div className="hero-sticky-container">
        <motion.div 
          className="hero-image-container"
          style={{ scale }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet="/mobilehero.png" />
            <img 
              src="/desktophero.png" 
              alt="Wedding Invitation Composition" 
              className="hero-image"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
