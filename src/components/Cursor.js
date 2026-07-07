import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// A two-part custom cursor: a small instant dot and a larger trailing ring
// that eases behind it and expands (with a label) over interactive targets.
// Renders nothing on touch/coarse pointers or under reduced motion.
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;
    setEnabled(true);
    document.body.classList.add('has-custom-cursor');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let rafId;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }

      const interactive = e.target.closest(
        'a, button, [role="button"], input, .cursor-target'
      );
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute('data-cursor') || '');
      } else {
        setHovering(false);
        setLabel('');
      }
    };

    const render = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [reduced]);

  if (!enabled) return null;

  return (
    <div className="cursor" aria-hidden="true">
      <div ref={dotRef} className="cursor__dot" />
      <div
        ref={ringRef}
        className={`cursor__ring ${hovering ? 'cursor__ring--hover' : ''} ${
          label ? 'cursor__ring--labeled' : ''
        }`}
      >
        {label && <span className="cursor__label">{label}</span>}
      </div>
    </div>
  );
}

export default Cursor;
