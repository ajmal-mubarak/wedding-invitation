import React from 'react';
import { motion } from 'framer-motion';
import './AyahSection.css';

const AyahSection = () => {
  return (
    <section className="ayah-section">
      <motion.span 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-sans-spaced section-subtitle"
      >
        Our Invitation
      </motion.span>
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ transformOrigin: 'center' }}
        className="section-title-underline"
      ></motion.div>
      
      <motion.div
        className="arched-invitation-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
      >
        {/* Oval Monogram S & J */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="monogram-oval-container"
        >
          <div className="monogram-oval">
            <span className="font-script oval-text">S & J</span>
          </div>
        </motion.div>

        {/* Bismillah & Arabic Ayah */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="arabic-content"
        >
          <p className="arabic-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className="arabic-ayah">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
        </motion.div>

        {/* English Text */}
        <div className="invitation-text-english">
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-serif-body invite-p"
          >
            On a night that brings together joy and love, we are honored to share moments we await with hearts full of love, where
          </motion.p>
          
          {/* Couple Names in Arabic Calligraphy */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="calligraphy-names-gold"
          >
            شهاباس & جمانة
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-serif-body invite-p"
          >
            by their wedding, hoping you'll share this joy to complete it with your presence.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-serif-body invite-highlight"
          >
            Your presence delights us and brightens our hearts.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AyahSection;
