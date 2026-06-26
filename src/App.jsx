import React, { useState, useRef } from 'react';
import Entrance from './components/Entrance';
import Hero from './components/Hero';
import CountdownSection from './components/CountdownSection';
import AyahSection from './components/AyahSection';
import TheBigDay from './components/TheBigDay';
import Venue from './components/Venue';
import FloatingHearts from './components/FloatingHearts';
import { Volume2, VolumeX } from 'lucide-react';
import './App.css';

function App() {
  const [isEntered, setIsEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsEntered(true);
    
    // Play background audio once user interacts with the open button
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(err => {
        console.log("Audio play failed: ", err);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMuted = !isMuted;
      audioRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <>
      {/* Background Audio */}
      <audio 
        ref={audioRef}
        src="/ReelAudio-3171.mp3"
        loop
        preload="auto"
      />
      
      {/* Cover Page Envelope */}
      <Entrance onOpen={handleOpenInvitation} />
      
      {/* Floating Hearts - rendered at root level so fixed positioning works correctly */}
      {isEntered && <FloatingHearts />}

      {/* Main Invitation Content */}
      <main style={{ 
        opacity: isEntered ? 1 : 0, 
        transition: 'opacity 1.2s ease-in-out',
        pointerEvents: isEntered ? 'auto' : 'none',
        visibility: isEntered ? 'visible' : 'hidden'
      }}>
        <Hero />
        <TheBigDay />
        <AyahSection />
        <CountdownSection />
        <Venue />
      </main>

      {/* Floating Music Control */}
      {isEntered && (
        <button 
          className="floating-audio-control" 
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute Music" : "Mute Music"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </>
  );
}

export default App;
