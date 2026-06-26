import React, { useState, useEffect } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartCount = 35;
    const newHearts = Array.from({ length: heartCount }).map((_, i) => {
      // Pink / meron shades matching the wedding theme
      const colors = [
        '#FF85A1', // bright pink
        '#FF6B8A', // hot pink
        '#FFB6C1', // light pink
        '#FF4D6D', // deep rose
        '#C9184A', // meron/magenta
        '#8B2635', // burgundy
        '#FFC8D8', // soft blush
        '#E8476A', // vivid rose
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        left: `${Math.random() * 98}%`,
        animationDuration: `${Math.random() * 10 + 8}s`,
        animationDelay: `${Math.random() * -18}s`,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.45,
        drift: `${(Math.random() - 0.5) * 70}px`,
        color: randomColor,
        size: `${Math.floor(Math.random() * 12 + 14)}px`,
      };
    });
    setHearts(newHearts);
  }, []);

  return (
    <div className="global-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="global-floating-heart"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            '--heart-scale': heart.scale,
            '--heart-opacity': heart.opacity,
            '--heart-drift': heart.drift,
            color: heart.color,
            fontSize: heart.size,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
