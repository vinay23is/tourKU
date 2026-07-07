// jest-dom adds custom matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';

// jsdom does not implement matchMedia; our reveal/parallax hooks rely on it.
if (typeof window.matchMedia !== 'function') {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
