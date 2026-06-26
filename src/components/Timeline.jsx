import React from 'react';
import { motion } from 'framer-motion';
import { Church, Camera, Wine } from 'lucide-react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    {
      time: "12 PM",
      title: "The Ceremony Begins",
      icon: <Church size={24} className="timeline-icon" />,
      direction: 'left'
    },
    {
      time: "1 PM",
      title: "Photos & Cocktails",
      icon: <Camera size={24} className="timeline-icon" />,
      direction: 'right'
    },
    {
      time: "2 PM",
      title: "Reception Follows",
      icon: <Wine size={24} className="timeline-icon" />,
      direction: 'left'
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="heading-font gold-text section-title">Order of Events</h2>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${event.direction}`}>
            <motion.div 
              className="timeline-content"
              initial={{ x: event.direction === 'left' ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className="timeline-time heading-font gold-text">{event.time}</div>
              <h3 className="title-font timeline-title">{event.title}</h3>
            </motion.div>
            
            <motion.div 
              className="timeline-marker"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              <div className="marker-inner">
                {event.icon}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
