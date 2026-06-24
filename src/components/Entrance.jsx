import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import './Entrance.css';

const Entrance = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartCount = 40;
    const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      scale: Math.random() * 0.5 + 0.5,
    }));
    setHearts(newHearts);
  }, []);

  const [isDone, setIsDone] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen(); // Start fading in main content immediately as doors open

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ffd1dc', '#d4af37', '#ffffff']
    });

    setTimeout(() => {
      setIsDone(true); // Remove entrance overlay after animation completes
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="entrance-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Background Hearts */}
          <div className="hearts-container">
            {hearts.map((heart) => (
              <div
                key={heart.id}
                className="floating-heart"
                style={{
                  left: heart.left,
                  animationDuration: heart.animationDuration,
                  animationDelay: heart.animationDelay,
                  transform: `scale(${heart.scale})`,
                }}
              >
                &#10084;
              </div>
            ))}
          </div>

          <AnimatePresence>
            {!isOpen && (
              <>
                {/* LEFT DOOR — shows left half of the image */}
                <motion.div
                  className="door left-door"
                  initial={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <picture>
                    <source media="(max-width: 768px)" srcSet="/opendoormobile.png" />
                    <img src="/opendoordesk.png" alt="" className="door-image door-image-left" />
                  </picture>
                </motion.div>

                {/* RIGHT DOOR — shows right half of the image */}
                <motion.div
                  className="door right-door"
                  initial={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <picture>
                    <source media="(max-width: 768px)" srcSet="/opendoormobile.png" />
                    <img src="/opendoordesk.png" alt="" className="door-image door-image-right" />
                  </picture>
                </motion.div>

                <motion.button
                  className="open-button"
                  onClick={handleOpen}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Open
                </motion.button>
              </>
            )}
          </AnimatePresence>


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Entrance;
