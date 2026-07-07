import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline and primary CTA', () => {
  render(<App />);
  // The headline is split across masked lines, so match the closing word.
  expect(screen.getAllByText(/Lawrence\./i).length).toBeGreaterThan(0);
  // "Start the tour" appears in the nav and the hero.
  expect(screen.getAllByText(/Start the tour/i).length).toBeGreaterThan(0);
});
