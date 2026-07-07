import React from 'react';
import './HeroSection.css';
import ParallaxLayer from './ParallaxLayer';

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

function HeroSection() {
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
          <p className="hero__eyebrow">Lawrence, Kansas · Mount Oread</p>
          <h1 className="hero__title">
            Tour KU through the story of <em>Lawrence</em>.
          </h1>
          <p className="hero__sub">
            One walking route connects the landmarks on the hill, the traditions that live in
            them, and the town at the bottom of Jayhawk Boulevard. Lawrence is not just where KU
            is located — it is the town that shaped the whole experience.
          </p>
          <div className="hero__actions">
            <a href="#tour-path" className="cta cta--primary">
              Start the tour
            </a>
            <a href="#landmarks" className="cta cta--ghost">
              Explore landmarks
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <ParallaxLayer speed={-0.06} className="hero__card hero__card--main">
            <img src="/images/kucampus.jpg" alt="" loading="eager" />
            <span className="hero__card-tag">Jayhawk Boulevard</span>
          </ParallaxLayer>
          <ParallaxLayer speed={-0.12} className="hero__card hero__card--small hero__card--a">
            <img src="/images/kujayhawk.jpg" alt="" loading="lazy" />
            <span className="hero__card-tag">The Jayhawk</span>
          </ParallaxLayer>
          <ParallaxLayer speed={-0.18} className="hero__card hero__card--small hero__card--b">
            <img src="/images/kuwescoe.webp" alt="" loading="lazy" />
            <span className="hero__card-tag">Wescoe Beach</span>
          </ParallaxLayer>
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

      <a href="#story" className="hero__scroll-hint">
        <span>The story starts downhill</span>
        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
          <path d="M8 12 L2 6 M8 12 L14 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </a>
    </section>
  );
}

export default HeroSection;
