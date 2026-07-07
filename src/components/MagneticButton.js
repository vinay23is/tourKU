import React from 'react';
import useMagnetic from '../hooks/useMagnetic';

// Anchor CTA that drifts toward the cursor on hover. The inner span carries a
// smooth transform so the label eases back into place on leave.
function MagneticButton({ href, className = '', children, strength = 0.4, ...rest }) {
  const ref = useMagnetic(strength);
  return (
    <a ref={ref} href={href} className={`magnetic ${className}`} {...rest}>
      <span className="magnetic__label">{children}</span>
    </a>
  );
}

export default MagneticButton;
