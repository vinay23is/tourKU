import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero headline', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /Tour KU through the story of Lawrence/i,
  });
  expect(heading).toBeInTheDocument();
});
