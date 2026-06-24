import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Gentle zoom: 1 → 1.1 as you scroll through the hero
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* overflow:hidden lives here to clip the zoom */}
      <div className="hero-clip">
        <motion.div className="hero-image-wrapper" style={{ scale }}>
          <picture>
            <source media="(max-width: 768px)" srcSet="/mobilehero.png" />
            <img
              src="/desktophero.png"
              alt="Wedding Invitation"
              className="hero-image"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
