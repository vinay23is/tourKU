import React from 'react';
import './StorySection.css';
import useReveal from '../hooks/useReveal';

const beats = [
  {
    marker: '1854',
    title: 'A town founded on a stance',
    body:
      'Lawrence was settled by New Englanders who came to Kansas with a purpose. That founding conviction gave the town an independent streak it never lost.',
  },
  {
    marker: '1866',
    title: 'The university takes the hill',
    body:
      'When KU opened, it did so on Mount Oread — the ridge above town. From the first day the campus literally looked down over the streets that raised it.',
  },
  {
    marker: 'Today',
    title: 'One continuous walk',
    body:
      'The distance from a lecture hall on the boulevard to a record shop on Mass Street is a short walk downhill. Students cross it every day without thinking about it.',
  },
];

function StorySection() {
  const ref = useReveal();
  return (
    <section className="story section" id="story" ref={ref}>
      <div className="container story__grid">
        <div className="story__intro reveal">
          <p className="eyebrow"><span className="eyebrow-num">02</span> Why start with the town</p>
          <h2 className="section-title">
            The university sits on the hill.<br />The character comes from below it.
          </h2>
          <p className="section-lede dropcap">
            Most campus tours begin and end at the property line. This one doesn&apos;t, because
            KU never really did. The habits, the traditions, even the walk to class are shaped by
            a town that was here first and is woven through everything on the ridge above it.
          </p>
        </div>

        <ol className="story__timeline">
          {beats.map((beat, i) => (
            <li key={beat.marker} className={`story__beat reveal reveal-delay-${i + 1}`}>
              <span className="story__marker">{beat.marker}</span>
              <div className="story__beat-body">
                <h3>{beat.title}</h3>
                <p>{beat.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default StorySection;
