import React, { useState } from 'react';
import './TourPath.css';
import stops from '../data/stops';
import useReveal from '../hooks/useReveal';

function TourPath() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const stop = stops[active];

  return (
    <section className="tourpath section" id="tour-path" ref={ref}>
      <div className="container">
        <div className="tourpath__head reveal">
          <p className="eyebrow">The route, stop by stop</p>
          <h2 className="section-title">Eight stops, one downhill line</h2>
          <p className="section-lede">
            The tour runs the length of Mount Oread and keeps going into town. Pick any stop to
            read what it is and why it earns a place on the walk. Times are rough walking
            estimates, not a schedule.
          </p>
        </div>

        <div className="tourpath__body reveal reveal-delay-1">
          <ol className="tourpath__list" aria-label="Tour stops">
            {stops.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={`tourpath__item ${i === active ? 'tourpath__item--active' : ''}`}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                >
                  <span className="tourpath__num">{s.number}</span>
                  <span className="tourpath__item-text">
                    <span className="tourpath__item-name">{s.name}</span>
                    <span className="tourpath__item-cat">{s.category}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="tourpath__detail" key={stop.id}>
            <div className="tourpath__detail-top">
              <span className="tourpath__badge">Stop {stop.number} of {stops.length}</span>
              <span className="tourpath__time">{stop.visit}</span>
            </div>
            <h3 className="tourpath__detail-name">{stop.name}</h3>
            <p className="tourpath__detail-short">{stop.short}</p>
            <p className="tourpath__detail-story">{stop.story}</p>
            <div className="tourpath__why">
              <span className="tourpath__why-label">Why it&apos;s on the route</span>
              <p>{stop.why}</p>
            </div>

            <div className="tourpath__nav">
              <button
                type="button"
                className="tourpath__step"
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
              >
                ← Previous
              </button>
              <button
                type="button"
                className="tourpath__step"
                onClick={() => setActive((a) => Math.min(stops.length - 1, a + 1))}
                disabled={active === stops.length - 1}
              >
                Next stop →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourPath;
