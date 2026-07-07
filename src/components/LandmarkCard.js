import React from 'react';

// A single landmark card. `featured` renders the large lead card variant.
function LandmarkCard({ landmark, featured = false }) {
  const { image, tag, name, blurb } = landmark;
  return (
    <article className={`landmark ${featured ? 'landmark--featured' : ''}`}>
      <div className="landmark__media">
        <img src={image} alt={name} loading="lazy" />
        <span className="landmark__tag">{tag}</span>
      </div>
      <div className="landmark__body">
        <h3 className="landmark__name">{name}</h3>
        <p className="landmark__blurb">{blurb}</p>
      </div>
    </article>
  );
}

export default LandmarkCard;
