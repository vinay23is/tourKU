import React, { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import './components/motion/RevealText.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Cursor from './components/Cursor';
import RouteSpine from './components/RouteSpine';
import Intro from './components/Intro';
import useSmoothScroll from './hooks/useSmoothScroll';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';

function App() {
  const reduced = usePrefersReducedMotion();
  // Under reduced motion, skip the intro and mark the hero ready immediately.
  const [introDone, setIntroDone] = useState(reduced);
  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  useSmoothScroll();

  return (
    <>
      <Cursor />
      <RouteSpine />

      <AnimatePresence>
        {!reduced && !introDone && <Intro key="intro" onComplete={handleIntroDone} />}
      </AnimatePresence>

      <Navbar />
      <main id="main">
        <Home ready={introDone} />
      </main>
    </>
  );
}

export default App;
