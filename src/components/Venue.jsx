import React from 'react';
import { motion } from 'framer-motion';
import './Venue.css';

const Venue = () => {
  return (
    <footer className="venue-section">
      <div className="venue-container">
        {/* Map circle icon — replaces boring heading */}
        <motion.a
          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.7586256424381!2d75.68077234217867!3d12.03877039424914"
          target="_blank"
          rel="noopener noreferrer"
          className="venue-map-circle"
          aria-label="Open in Google Maps"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="venue-pin-icon">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
              fill="currentColor"
            />
          </svg>
          <span className="venue-map-label">Venue</span>
        </motion.a>
        
        <motion.div 
          className="map-frame"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.7586256424381!2d75.68077234217867!3d12.03877039424914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4350014584ab5%3A0x3b1ced187ec5ca7d!2sAjmal%20home!5e0!3m2!1sen!2sin!4v1782206277961!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Map"
          ></iframe>
        </motion.div>
        
        <div className="footer-content">
          <h3 className="title-font">We can't wait to celebrate with you!</h3>
          <p className="heading-font gold-text footer-names">SHAHABAS & JUMANA</p>
        </div>
      </div>
      
      {/* Background Hearts Fading Out Softly */}
      <div className="footer-hearts">
        {/* Reuse heart animation or a static faded image/gradient */}
      </div>
    </footer>
  );
};

export default Venue;
