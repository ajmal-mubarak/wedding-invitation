import React, { useState } from 'react';
import Entrance from './components/Entrance';
import Hero from './components/Hero';
import CountdownSection from './components/CountdownSection';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <>
      <FloatingHearts />
      <Entrance onOpen={() => setIsEntered(true)} />
      
      {/* 
        We render the rest of the application so it is ready 
        when the doors open, but it can be hidden from screen readers
        or pointer events until entered if necessary. 
      */}
      <main style={{ 
        opacity: isEntered ? 1 : 0, 
        transition: 'opacity 1s ease-in',
        pointerEvents: isEntered ? 'auto' : 'none'
      }}>
        <Hero />
        <CountdownSection />
        <Timeline />
        <Venue />
      </main>
    </>
  );
}

export default App;
