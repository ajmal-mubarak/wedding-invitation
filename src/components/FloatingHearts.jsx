import React, { useState, useEffect } from 'react';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate static array of hearts
    const heartCount = 30; // Number of hearts on screen at once
    const newHearts = Array.from({ length: heartCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 6}s`, // 6 to 14 seconds to float up
      animationDelay: `${Math.random() * 10}s`, // spread out start times
      scale: Math.random() * 0.6 + 0.4, // size variation
      opacity: Math.random() * 0.5 + 0.3, // opacity variation
    }));
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
            transform: `scale(${heart.scale})`,
            opacity: heart.opacity,
          }}
        >
          &#10084;
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
