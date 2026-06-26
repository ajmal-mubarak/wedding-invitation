import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Venue.css';

const Venue = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div className="venue-footer-container">
      {/* 1. THE VENUE SECTION */}
      <section className="venue-section-custom">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans-spaced venue-subtitle"
        >
          The Venue
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif-heading venue-main-title"
        >
          Where we celebrate
        </motion.h2>
        
        {/* Wave/Tilde Divider */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="wave-divider"
        >
          <div className="wave-line"></div>
          <span className="wave-tilde">~</span>
          <div className="wave-line"></div>
        </motion.div>

        {/* Ballroom Sketch Card */}
        <motion.div 
          className="venue-sketch-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="sketch-image-wrapper">
            <img src="/venue_sketch.png" alt="Venue Ballroom Sketch" className="sketch-image" />
          </div>
        </motion.div>

        {/* Venue Information */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif-heading venue-location-title"
        >
          Ajmal Home
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-serif-body venue-description"
        >
          Join us at Ajmal Home for an evening of vows, celebration
        </motion.p>

        {/* View on Map Button */}
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans-spaced view-map-btn" 
          onClick={() => setIsMapOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="btn-pin-icon">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
          </svg>
          View On The Map
        </motion.button>
      </section>

      {/* 2. TIME & DATE SECTION (Burgundy Background) */}
      <section className="datetime-section">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="wave-divider light"
        >
          <div className="wave-line"></div>
          <span className="wave-tilde">~</span>
          <div className="wave-line"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-heading datetime-time"
        >
          12:00 PM
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.95, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif-body datetime-date"
        >
          Sunday, August 9, 2026
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-serif-body datetime-note"
        >
          Please be on time to enjoy every moment — the bride and groom will join at 12:00 PM.
        </motion.p>
      </section>

      {/* 3. ISLAMIC QUOTE SECTION (Cream Background) */}
      <section className="quote-section">
        <motion.div 
          className="quote-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Corner brackets */}
          <div className="card-corner top-left"></div>
          <div className="card-corner top-right"></div>
          <div className="card-corner bottom-left"></div>
          <div className="card-corner bottom-right"></div>
          
          <p className="font-serif-body quote-card-text">
            "Souls are like recruited soldiers; those that recognize one another unite in harmony"
            <span className="quote-source">— Sahih al-Bukhari</span>
          </p>

          <div className="wave-divider gold-small">
            <div className="wave-line"></div>
            <span className="wave-tilde">~</span>
            <div className="wave-line"></div>
          </div>
        </motion.div>
      </section>

      {/* 4. FOOTER (Burgundy Background) */}
      <footer className="invitation-footer">
        <motion.h2 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif-heading footer-names"
        >
          Shahabas & Jumana
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="wave-divider light"
        >
          <div className="wave-line"></div>
          <span className="wave-tilde">~</span>
          <div className="wave-line"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans-spaced footer-date"
        >
          August 9, 2026
        </motion.p>

        {/* Intertwined Rings SVG Illustration */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="footer-rings-container"
        >
          <svg viewBox="0 0 100 80" className="footer-rings-svg">
            <ellipse cx="40" cy="45" rx="17" ry="17" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(-12 40 45)" />
            <ellipse cx="60" cy="45" rx="17" ry="17" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(12 60 45)" />
            <path d="M60 28 L63 22 L60 18 L57 22 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <line x1="57" y1="22" x2="63" y2="22" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.div>
      </footer>

      {/* MAP MODAL OVERLAY */}
      <AnimatePresence>
        {isMapOpen && (
          <motion.div 
            className="map-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMapOpen(false)}
          >
            <motion.div 
              className="map-modal-card"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button className="map-modal-close" onClick={() => setIsMapOpen(false)} aria-label="Close Map">
                &times;
              </button>

              {/* Map Iframe */}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Venue;
