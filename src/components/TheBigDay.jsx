import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './TheBigDay.css';

const TheBigDay = () => {
  const [isScratched, setIsScratched] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Draw the gold base card
    ctx.fillStyle = '#C5A880'; // Accent gold base
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add gold texture noise
    for (let i = 0; i < 4000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#d4af37' : '#b2936a';
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
    
    // Text: SCRATCH TO REVEAL
    ctx.font = '300 20px Jost';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '0.15em';
    ctx.fillText('SCRATCH TO REVEAL', canvas.width / 2, canvas.height / 2 + 7);

    let isDrawing = false;
    let scratchedArea = 0;
    const totalArea = canvas.width * canvas.height;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 25, 0, Math.PI * 2, false);
      ctx.fill();
      
      scratchedArea += Math.PI * 25 * 25;
      if (scratchedArea / totalArea > 0.4 && !isScratched) {
        setIsScratched(true);
        canvas.style.transition = 'opacity 0.8s ease-out';
        canvas.style.opacity = '0';
        setTimeout(() => {
          canvas.style.display = 'none';
        }, 800);
      }
    };

    const getCoordinates = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return [
        (clientX - rect.left) * scaleX,
        (clientY - rect.top) * scaleY
      ];
    };

    const handleMouseDown = (e) => {
      isDrawing = true;
      const [x, y] = getCoordinates(e.clientX, e.clientY);
      scratch(x, y);
    };

    const handleMouseMove = (e) => {
      if (isDrawing) {
        const [x, y] = getCoordinates(e.clientX, e.clientY);
        scratch(x, y);
      }
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    // Mouse Listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    // Touch Listeners
    const handleTouchStart = (e) => {
      e.preventDefault();
      isDrawing = true;
      const [x, y] = getCoordinates(e.touches[0].clientX, e.touches[0].clientY);
      scratch(x, y);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (isDrawing) {
        const [x, y] = getCoordinates(e.touches[0].clientX, e.touches[0].clientY);
        scratch(x, y);
      }
    };

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleMouseUp);
    };
  }, [isScratched]);

  return (
    <section className="scratch-section-custom">
      <motion.h2 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-sans-spaced scratch-section-title"
      >
        The Big Day
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="scratch-card-container"
      >
        {/* Revealed Content (Maroon Theme Card with Date on Top, Place Below) */}
        <div className="revealed-details-card">
          <h3 className="font-serif-heading revealed-datetime-large">9 / 8 / 2026 at 12 PM</h3>
          
          <div className="wave-divider gold-small-scratch">
            <div className="wave-line"></div>
            <span className="wave-tilde">~</span>
            <div className="wave-line"></div>
          </div>
          
          <p className="font-sans-spaced revealed-location-small">Ajmal Home</p>
          <p className="font-serif-body revealed-address-small">Sreekandapuram, Kannur, Kerala</p>
        </div>

        {/* Scratchable Canvas */}
        {!isScratched && (
          <canvas
            ref={canvasRef}
            width={600}
            height={200}
            className="scratch-card-canvas"
          />
        )}
      </motion.div>
    </section>
  );
};

export default TheBigDay;
