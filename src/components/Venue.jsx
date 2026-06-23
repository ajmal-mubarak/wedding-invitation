import React from 'react';
import { motion } from 'framer-motion';
import './Venue.css';

const Venue = () => {
  return (
    <footer className="venue-section">
      <div className="venue-container">
        <h2 className="heading-font gold-text section-title">Our Wedding Venue</h2>
        
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
          <p className="heading-font gold-text footer-names">JESSICA & JAMES</p>
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
