import React from 'react';
import useParallax from '../hooks/useParallax';

// Thin wrapper that drifts its children on scroll. Purely decorative layers
// should also pass aria-hidden via ...rest.
function ParallaxLayer({ speed = 0.15, className = '', children, ...rest }) {
  const ref = useParallax(speed);
  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}

export default ParallaxLayer;
