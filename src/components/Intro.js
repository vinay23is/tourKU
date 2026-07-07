import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

// Brief branded load-in: the wordmark and a hairline draw in, then the panel
// lifts to reveal the hero. Calls onComplete when it clears so the hero can
// sequence its own entrance. The parent skips rendering this under reduced
// motion, so no guard is needed here.
function Intro({ onComplete }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1400);
    const t2 = setTimeout(() => onComplete(), 2150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="intro"
      initial={{ y: 0 }}
      animate={leaving ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="intro__inner">
        <motion.p
          className="intro__kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Lawrence, Kansas
        </motion.p>

        <div className="intro__wordmark-mask">
          <motion.h1
            className="intro__wordmark"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Tour<span className="intro__wordmark-accent">KU</span>
          </motion.h1>
        </div>

        <motion.div
          className="intro__line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default Intro;
