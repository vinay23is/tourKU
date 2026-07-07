import React from 'react';
import './FinalCTA.css';
import useReveal from '../hooks/useReveal';

function FinalCTA() {
  const ref = useReveal();
  return (
    <section className="finalcta section" id="plan" ref={ref}>
      <div className="container finalcta__inner reveal">
        <p className="eyebrow eyebrow--light">Ready when you are</p>
        <h2 className="finalcta__title">Plan your KU walk</h2>
        <p className="finalcta__lede">
          Start at the top of the hill, follow the eight stops down, and end wherever Mass Street
          takes you. No ticket, no schedule — just the route and a couple of hours.
        </p>
        <div className="finalcta__actions">
          <a href="#tour-path" className="cta cta--primary">
            Walk the route
          </a>
          <a href="#landmarks" className="cta cta--navy">
            Explore by landmark
          </a>
          <a href="#route" className="cta cta--ghost">
            See the map
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
