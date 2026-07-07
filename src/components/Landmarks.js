import React from 'react';
import './Landmarks.css';
import LandmarkCard from './LandmarkCard';
import useReveal from '../hooks/useReveal';

const featured = {
  image: '/images/kucampus.jpg',
  tag: 'The Spine',
  name: 'Jayhawk Boulevard',
  blurb:
    'The one street that ties the whole campus together, running the crest of the hill past limestone halls a century in the making. If the tour has a main character, this is it.',
};

const supporting = [
  {
    image: '/images/kufootball.jpg',
    tag: 'Game Day',
    name: 'Memorial Stadium',
    blurb: 'Kansas football under the hill, and one of the oldest stadiums in the country.',
  },
  {
    image: '/images/kucapfed.jpg',
    tag: 'Academics',
    name: 'Capitol Federal Hall',
    blurb: 'The business school building — glass, light, and a very different era of campus.',
  },
  {
    image: '/images/kuwescoe.webp',
    tag: 'Daily Life',
    name: 'Wescoe Beach',
    blurb: 'No sand, just the sunny plaza where campus gathers between classes.',
  },
  {
    image: '/images/kujayhawk.jpg',
    tag: 'Symbol',
    name: 'The Jayhawk',
    blurb: 'A mascot invented in Kansas that exists nowhere else. You will see it everywhere.',
  },
];

function Landmarks() {
  const ref = useReveal();
  return (
    <section className="landmarks section" id="landmarks" ref={ref}>
      <div className="container">
        <div className="landmarks__head reveal">
          <p className="eyebrow">Featured on the hill</p>
          <h2 className="section-title">The places you&apos;ll remember</h2>
          <p className="section-lede">
            A few stops carry more weight than the rest — the ones people describe when they try
            to explain what KU felt like. Start with these.
          </p>
        </div>

        <div className="landmarks__grid">
          <div className="landmarks__feature reveal reveal-delay-1">
            <LandmarkCard landmark={featured} featured />
          </div>
          {supporting.map((item, i) => (
            <div
              key={item.name}
              className={`landmarks__cell reveal reveal-delay-${(i % 3) + 1}`}
            >
              <LandmarkCard landmark={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Landmarks;
