import React from 'react';
import { motion } from 'framer-motion';
import './AyahSection.css';

const AyahSection = () => {
  return (
    <section className="ayah-section">
      <motion.div
        className="ayah-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Decorative top ornament */}
        <div className="ayah-ornament top">
          <span className="ornament-line" />
          <span className="ornament-diamond">◆</span>
          <span className="ornament-line" />
        </div>

        {/* Arabic text */}
        <p className="ayah-arabic">
          وَمِنۡ ءَایَـٰتِهِۦۤ أَنۡ خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجًا لِّتَسۡكُنُوٓا۟ إِلَیۡهَا وَجَعَلَ بَیۡنَكُم مَّوَدَّةً وَرَحۡمَةً ۚ إِنَّ فِی ذَٰلِكَ لَءَایَـٰتٍ لِّقَوۡمٍ یَتَفَكَّرُونَ
        </p>

        {/* Divider */}
        <div className="ayah-divider" />

        {/* English translation */}
        <p className="ayah-translation">
          "Among His signs is that He created for you mates from among yourselves, in order to have tranquility with them, and He put love and mercy between your hearts. Verily, in that are signs for those who reflect."
        </p>

        {/* Reference */}
        <p className="ayah-reference">— Quran, Ar-Rum [30:21]</p>

        {/* Decorative bottom ornament */}
        <div className="ayah-ornament bottom">
          <span className="ornament-line" />
          <span className="ornament-diamond">◆</span>
          <span className="ornament-line" />
        </div>
      </motion.div>
    </section>
  );
};

export default AyahSection;
