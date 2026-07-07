import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './RouteSpine.css';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// The signature device: a fixed crimson route line down the left margin that
// draws itself as you scroll the page, with a moving marker at its head and
// station dots that light up as you pass them. Hidden on small screens and
// under reduced motion.
const STATIONS = [0.12, 0.28, 0.45, 0.62, 0.8, 0.95];

function RouteSpine() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  // marker travels down the 0..560 tall path
  const markerY = useTransform(progress, [0, 1], [8, 552]);

  if (reduced) return null;

  return (
    <div className="spine" aria-hidden="true">
      <svg className="spine__svg" viewBox="0 0 24 560" preserveAspectRatio="none">
        <path
          className="spine__track"
          d="M12 4 C 4 90, 20 150, 12 220 S 4 360, 12 430 S 20 520, 12 556"
        />
        <motion.path
          className="spine__fill"
          d="M12 4 C 4 90, 20 150, 12 220 S 4 360, 12 430 S 20 520, 12 556"
          style={{ pathLength: progress }}
        />
      </svg>

      <div className="spine__stations">
        {STATIONS.map((s) => (
          <Station key={s} at={s} progress={progress} />
        ))}
      </div>

      <motion.span className="spine__marker" style={{ top: markerY }} />
      <span className="spine__cap spine__cap--start" />
    </div>
  );
}

function Station({ at, progress }) {
  const opacity = useTransform(progress, [at - 0.04, at], [0.25, 1]);
  const scale = useTransform(progress, [at - 0.04, at], [0.7, 1]);
  return (
    <motion.span
      className="spine__station"
      style={{ top: `${at * 100}%`, opacity, scale }}
    />
  );
}

export default RouteSpine;
