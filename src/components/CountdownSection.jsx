import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CountdownSection.css';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isScratched, setIsScratched] = useState(false);
  const canvasRef = useRef(null);
  const targetDate = new Date('2026-08-09T12:00:00').getTime(); // Updated wedding date

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Scratch card logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Fill with stylized textured overlay
    ctx.fillStyle = '#d4af37'; // Gold base
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some noise for texture
    for(let i = 0; i < 5000; i++) {
        ctx.fillStyle = Math.random() > 0.5 ? '#e5c158' : '#c39d26';
        ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
    
    ctx.font = '24px Jost';
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL', canvas.width/2, canvas.height/2 + 8);

    let isDrawing = false;
    let scratchedPixels = 0;
    const totalPixels = canvas.width * canvas.height;

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.fill();
      
      // Calculate scratched area (rough estimation)
      scratchedPixels += Math.PI * 30 * 30;
      if (scratchedPixels / totalPixels > 0.8 && !isScratched) {
        setIsScratched(true);
        // Fade out canvas
        canvas.style.transition = 'opacity 1s';
        canvas.style.opacity = '0';
        setTimeout(() => canvas.style.display = 'none', 1000);
      }
    };

    const getCoords = (clientX, clientY) => {
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
      const [x, y] = getCoords(e.clientX, e.clientY);
      scratch(x, y); 
    };
    const handleMouseMove = (e) => { 
      if (isDrawing) {
        const [x, y] = getCoords(e.clientX, e.clientY);
        scratch(x, y); 
      }
    };
    const handleMouseUp = () => { isDrawing = false; };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    // Touch support
    const handleTouchStart = (e) => {
      e.preventDefault();
      isDrawing = true;
      const [x, y] = getCoords(e.touches[0].clientX, e.touches[0].clientY);
      scratch(x, y);
    };
    const handleTouchMove = (e) => {
      e.preventDefault();
      if (isDrawing) {
        const [x, y] = getCoords(e.touches[0].clientX, e.touches[0].clientY);
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
    <section className="countdown-section">
      <h2 className="heading-font gold-text section-title">The Big Day</h2>
      
      <div className="scratch-container">
        <div className="revealed-content">
          <h3 className="title-font">The Most Holy Rosary Chapel</h3>
          <p className="title-font">Edwin Andrews Air Base Isabel, sta. Maria, Zamboanga City</p>
          <p className="heading-font gold-text date-time">9/8/2026 at 12 PM</p>
        </div>
        {!isScratched && (
          <canvas 
            ref={canvasRef} 
            width={600} 
            height={200} 
            className="scratch-canvas"
          />
        )}
      </div>

      <div className="countdown-timer">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-block">
            <motion.div 
              key={value}
              initial={{ scale: 1.2, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              className="time-value title-font gold-text"
            >
              {value.toString().padStart(2, '0')}
            </motion.div>
            <div className="time-label heading-font">{unit.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountdownSection;
