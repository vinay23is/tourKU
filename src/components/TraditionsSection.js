import React from 'react';
import './TraditionsSection.css';
import ParallaxLayer from './ParallaxLayer';
import useReveal from '../hooks/useReveal';

const traditions = [
  {
    title: 'Rock Chalk Chant',
    text:
      'Slow, drawn-out, and unmistakable. It rolls around Allen Fieldhouse and carries down the hill on game nights — the oldest chant in college sports.',
  },
  {
    title: 'Walking Down the Hill',
    text:
      'Graduates process down Campanile Hill and through the memorial arch to Commencement — a walk most save for exactly one day.',
  },
  {
    title: 'The Campanile Bells',
    text:
      'The carillon marks the hours over campus. Learn the pattern and you can tell the time on the boulevard without looking at a phone.',
  },
  {
    title: 'Waving the Wheat',
    text:
      'Arms up, hands swaying like a Kansas wheat field after a score. Corny in the best way, and completely local.',
  },
];

function TraditionsSection() {
  const ref = useReveal();
  return (
    <section className="traditions section" id="traditions" ref={ref}>
      <ParallaxLayer
        speed={0.12}
        className="traditions__bg"
        aria-hidden="true"
        style={{ backgroundImage: 'url(/images/kuwelcome.jpg)' }}
      />
      <div className="container traditions__inner">
        <div className="traditions__head reveal">
          <p className="eyebrow eyebrow--light">What sticks with you</p>
          <h2 className="section-title traditions__title">
            Traditions you can&apos;t read about — only stand in
          </h2>
          <p className="section-lede traditions__lede">
            The buildings are the reason to come. The traditions are the reason people stay
            attached to them for decades. A few worth knowing before you walk the route.
          </p>
        </div>

        <div className="traditions__grid">
          {traditions.map((t, i) => (
            <article
              key={t.title}
              className={`traditions__card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <span className="traditions__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TraditionsSection;
