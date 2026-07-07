import React, { useState } from 'react';
import './RouteMap.css';
import stops from '../data/stops';
import useReveal from '../hooks/useReveal';

// Hand-placed points along a stylised downhill curve. Coordinates are on a
// 0–1000 x 0–560 viewBox and don't map to real GPS — they read top-of-hill to
// downtown, matching the tour order.
const points = [
  { x: 120, y: 90 },
  { x: 250, y: 150 },
  { x: 360, y: 130 },
  { x: 470, y: 205 },
  { x: 560, y: 175 },
  { x: 660, y: 255 },
  { x: 780, y: 300 },
  { x: 890, y: 430 },
];

const PATH =
  'M120 90 C 200 130, 210 150, 250 150 S 330 110, 360 130 S 440 210, 470 205 ' +
  'S 540 160, 560 175 S 630 250, 660 255 S 750 280, 780 300 S 860 380, 890 430';

function RouteMap() {
  const ref = useReveal();
  const [hover, setHover] = useState(null);
  const activeStop = hover != null ? stops[hover] : null;

  return (
    <section className="routemap section" id="route" ref={ref}>
      <div className="container">
        <div className="routemap__head reveal">
          <p className="eyebrow">See the whole line</p>
          <h2 className="section-title">From the top of the hill to Mass Street</h2>
          <p className="section-lede">
            The route falls away from the crest of the hill at Fraser and keeps dropping until it
            reaches downtown Lawrence. Hover or tap a marker to see which stop it is — the line is
            a sketch of the walk, not a survey map.
          </p>
        </div>

        <figure className="routemap__figure reveal reveal-delay-1">
          <svg
            viewBox="0 0 1000 560"
            className="routemap__svg"
            role="img"
            aria-label="Illustrated route of the eight tour stops from Mount Oread down to downtown Lawrence"
          >
            {/* limestone contour backdrop */}
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={`M-40 ${180 + i * 90} C 260 ${120 + i * 90}, 620 ${240 + i * 90}, 1040 ${150 + i * 90}`}
                fill="none"
                stroke="rgba(11,30,61,0.06)"
                strokeWidth="2"
              />
            ))}

            {/* the route */}
            <path d={PATH} className="routemap__track" />
            <path d={PATH} className="routemap__progress" />

            {points.map((p, i) => {
              const isActive = hover === i;
              return (
                <g
                  key={stops[i].id}
                  className={`routemap__stop ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Stop ${stops[i].number}: ${stops[i].name}`}
                >
                  <circle cx={p.x} cy={p.y} r="22" className="routemap__halo" />
                  <circle cx={p.x} cy={p.y} r="15" className="routemap__dot" />
                  <text x={p.x} y={p.y + 5} className="routemap__dot-num">
                    {stops[i].number}
                  </text>
                </g>
              );
            })}

            <text x="120" y="52" className="routemap__label">Mount Oread</text>
            <text x="890" y="470" className="routemap__label routemap__label--end">
              Downtown Lawrence
            </text>
          </svg>

          <figcaption className={`routemap__caption ${activeStop ? 'is-visible' : ''}`}>
            {activeStop ? (
              <>
                <span className="routemap__caption-num">Stop {activeStop.number}</span>
                <strong>{activeStop.name}</strong>
                <span className="routemap__caption-cat">{activeStop.category} · {activeStop.visit}</span>
              </>
            ) : (
              <span className="routemap__caption-hint">Hover a marker to preview a stop</span>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default RouteMap;
