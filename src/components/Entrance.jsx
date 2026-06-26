import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import './Entrance.css';

const Entrance = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Confetti burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffd1dc', '#c5a880', '#ffffff', '#5c161e']
    });

    // Notify App to reveal content and play music
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="entrance-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Envelope Card */}
          <motion.div 
            className="envelope-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Double Border Frame */}
            <div className="envelope-inner-border">
              <span className="font-sans-spaced envelope-label">The Wedding Of</span>
              
              {/* Gold Divider Line with dot */}
              <div className="envelope-dot-divider">
                <div className="divider-line"></div>
                <div className="divider-dot"></div>
                <div className="divider-line"></div>
              </div>

              {/* Calligraphy Monogram */}
              <div className="font-script envelope-monogram">S & J</div>

              <div className="envelope-names-divider"></div>

              {/* Couple Names */}
              <h1 className="font-script envelope-names">Shahabas & Jumana</h1>

              {/* Date */}
              <p className="font-serif-body envelope-date">09 . 08 . 2026</p>

              {/* Button */}
              <button className="font-sans-spaced open-invitation-btn" onClick={handleOpen}>
                Open Invitation
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Entrance;
