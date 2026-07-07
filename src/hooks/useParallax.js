import { useEffect, useRef } from 'react';

// Translates the element vertically as the page scrolls, scaled by `speed`
// (positive = drifts down slower than scroll, negative = drifts up).
// Disabled entirely under prefers-reduced-motion.
export default function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY * speed;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
}
