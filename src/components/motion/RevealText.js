import React from 'react';
import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

// Line-by-line masked headline reveal: each line slides up from behind a
// clipping wrapper, staggered. `lines` is an array of nodes (one per line).
// Renders semantic text; under reduced motion the lines simply appear.
function RevealText({
  lines,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.09,
  duration = 0.8,
  play = 'inView', // 'inView' | true | false
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="revealtext__line-static">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  const animateProp =
    play === 'inView'
      ? { whileInView: 'show', viewport: { once: true, amount: 0.6 } }
      : { animate: play ? 'show' : 'hidden' };

  return (
    <Tag className={className}>
      <motion.span
        className="revealtext"
        initial="hidden"
        {...animateProp}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {lines.map((line, i) => (
          <span key={i} className="revealtext__mask">
            <motion.span
              className="revealtext__line"
              variants={{
                hidden: { y: '115%' },
                show: {
                  y: '0%',
                  transition: { duration, ease: [0.22, 0.61, 0.36, 1] },
                },
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export default RevealText;
