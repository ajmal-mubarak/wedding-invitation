import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CountdownSection.css';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const targetDate = new Date('2026-08-09T12:00:00').getTime(); // August 9th, 2026 at 12 PM

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 60000); // Update every minute
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="countdown-section">
      {/* Top Envelope Icon Doodle */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="doodle-top-container"
      >
        <svg viewBox="0 0 100 100" className="doodle-envelope">
          <rect x="25" y="15" width="50" height="60" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="25" y1="45" x2="75" y2="45" stroke="currentColor" strokeWidth="1.2" />
          <path d="M43 45 C41 40 45 38 48 43 C50 43 50 44 48 45" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M57 45 C59 40 55 38 52 43 C50 43 50 44 52 45" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M49 45 Q47 52 45 55" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M51 45 Q53 52 55 55" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="32" y1="25" x2="68" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <line x1="32" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" />
        </svg>
      </motion.div>

      {/* Main Countdown Headers */}
      <motion.h2 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif-heading countdown-heading"
      >
        Countdown
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-serif-body countdown-subheading"
      >
        to the day our hearts unite
      </motion.p>

      {/* Countdown Digits */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="countdown-digits-wrapper"
      >
        <span className="font-serif-heading digit-num">
          {timeLeft.days.toString().padStart(2, '0')}
        </span>
        <span className="digit-separator">.</span>
        <span className="font-serif-heading digit-num">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className="digit-separator">.</span>
        <span className="font-serif-heading digit-num">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
      </motion.div>

      {/* Countdown Labels */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="countdown-labels-wrapper"
      >
        <span className="font-sans-spaced digit-label">DAYS</span>
        <span className="font-sans-spaced digit-label">HOURS</span>
        <span className="font-sans-spaced digit-label">MINUTES</span>
      </motion.div>

      {/* Bottom Doodles */}
      <div className="countdown-bottom-doodles">
        {/* Left Doodle: Two Candles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.45, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="doodle-bottom-left"
        >
          <svg viewBox="0 0 80 150" className="doodle-candles">
            <path d="M15 110 L45 110 M30 110 L30 135 M15 135 L45 135" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="22" y="50" width="6" height="60" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="37" y="35" width="6" height="75" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M25 38 Q22 44 25 48 Q28 44 25 38 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M40 23 Q37 29 40 33 Q43 29 40 23 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M15 95 Q30 105 45 95" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </motion.div>

        {/* Right Doodle: Flower Bouquet */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.45, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="doodle-bottom-right"
        >
          <svg viewBox="0 0 100 150" className="doodle-bouquet">
            <path d="M25 125 L50 70 L75 125 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M20 70 L50 125 L80 70" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="115" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M47 115 C42 110 42 120 47 115 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M53 115 C58 110 58 120 53 115 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M49 117 L44 130" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M51 117 L56 130" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="36" cy="62" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="64" cy="62" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M50 50 A 6 6 0 0 1 47 45 A 3 3 0 0 1 50 48" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M36 62 A 5 5 0 0 1 33 58 A 2 2 0 0 1 36 60" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M64 62 A 5 5 0 0 1 61 58 A 2 2 0 0 1 64 60" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M26 50 Q30 38 42 42" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M74 50 Q70 38 58 42" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <path d="M50 36 Q50 24 45 28" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
