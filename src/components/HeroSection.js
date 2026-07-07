import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import ParallaxLayer from './ParallaxLayer';
import RevealText from './motion/RevealText';
import MagneticButton from './MagneticButton';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// Decorative contour lines echoing a topographic map of the hill.
function ContourLines() {
  return (
    <svg
      className="hero__contours"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M-100 ${520 - i * 70}
             C 260 ${430 - i * 62}, 520 ${560 - i * 74}, 780 ${470 - i * 66}
             S 1300 ${520 - i * 70}, 1560 ${440 - i * 62}`}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

// The silhouette of Mount Oread with Fraser-style twin towers on the crest.
function HillSilhouette() {
  return (
    <svg
      className="hero__hill"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path
        d="M0 320 L0 250 C 180 235 320 205 470 170
           L 560 150 L 560 118 L 574 118 L 574 96 L 588 96 L 588 118 L 602 118 L 602 148
           L 640 140 L 640 110 L 654 110 L 654 88 L 668 88 L 668 110 L 682 110 L 682 138
           C 820 128 960 150 1090 185 C 1230 222 1340 245 1440 255 L 1440 320 Z"
        fill="var(--navy)"
      />
      <path
        d="M0 320 L0 292 C 240 280 480 262 720 262 C 960 262 1200 280 1440 292 L 1440 320 Z"
        fill="var(--ku-blue-deep)"
        opacity="0.85"
      />
    </svg>
  );
}

const cards = [
  { cls: 'hero__card--main', speed: -0.06, src: '/images/kucampus.jpg', tag: 'Jayhawk Boulevard', delay: 0.1 },
  { cls: 'hero__card--a', speed: -0.12, src: '/images/kujayhawk.jpg', tag: 'The Jayhawk', delay: 0.24 },
  { cls: 'hero__card--b', speed: -0.18, src: '/images/kuwescoe.webp', tag: 'Wescoe Beach', delay: 0.38 },
];

function HeroSection({ ready }) {
  const reduced = usePrefersReducedMotion();
  // Play the headline reveal once the intro has cleared (or immediately when
  // motion is reduced / the intro is skipped).
  const play = reduced ? true : ready;

  const fade = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: play ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
          transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] },
        };

  return (
    <section className="hero" id="top" aria-label="Introduction">
      <ParallaxLayer speed={0.25} className="hero__layer" aria-hidden="true">
        <ContourLines />
      </ParallaxLayer>

      <ParallaxLayer speed={0.1} className="hero__layer hero__layer--hill" aria-hidden="true">
        <HillSilhouette />
      </ParallaxLayer>

      <div className="hero__content container">
        <div className="hero__copy">
          <motion.p className="hero__eyebrow" {...fade(0.15)}>
            <span className="hero__eyebrow-num">01</span> Lawrence, Kansas · Mount Oread
          </motion.p>

          <RevealText
            as="h1"
            className="hero__title"
            play={play}
            delay={0.3}
            lines={[
              <>Tour KU through</>,
              <>the story of</>,
              <em key="l">Lawrence.</em>,
            ]}
          />

          <motion.p className="hero__sub" {...fade(0.95)}>
            One walking route connects the landmarks on the hill, the traditions that live in
            them, and the town at the bottom of Jayhawk Boulevard. Lawrence is not just where KU
            is located — it is the town that shaped the whole experience.
          </motion.p>

          <motion.div className="hero__actions" {...fade(1.1)}>
            <MagneticButton href="#tour-path" className="cta cta--primary" data-cursor="Walk">
              Start the tour
            </MagneticButton>
            <MagneticButton href="#landmarks" className="cta cta--ghost">
              Explore landmarks
            </MagneticButton>
          </motion.div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          {cards.map((c) => (
            <ParallaxLayer key={c.cls} speed={c.speed} className={`hero__card ${c.cls}`}>
              <motion.div
                className="hero__card-inner"
                initial={reduced ? false : { opacity: 0, y: 40, rotate: -2 }}
                animate={
                  reduced || play
                    ? { opacity: 1, y: 0, rotate: 0 }
                    : { opacity: 0, y: 40, rotate: -2 }
                }
                transition={{ duration: 0.8, delay: c.delay + 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <img src={c.src} alt="" loading="eager" className="duotone" />
                <span className="hero__card-tag">{c.tag}</span>
              </motion.div>
            </ParallaxLayer>
          ))}
          <svg className="hero__route-line" viewBox="0 0 300 400" aria-hidden="true">
            <path
              d="M40 380 C 90 300, 30 220, 120 170 S 260 90, 250 20"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="2"
              strokeDasharray="3 9"
              strokeLinecap="round"
            />
            <circle cx="40" cy="380" r="5" fill="var(--ku-crimson)" />
            <circle cx="250" cy="20" r="5" fill="var(--gold)" />
          </svg>
        </div>
      </div>

      <motion.a href="#story" className="hero__scroll-hint" {...fade(1.3)}>
        <span>The story starts downhill</span>
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="M8 12 L2 6 M8 12 L14 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </motion.a>
    </section>
  );
}

export default HeroSection;
