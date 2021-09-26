import { render, screen } from '@testing-library/react';
import EpisodeList from './EpisodeList/EpisodeList.js';

test('renders one episode list headers', () => {
  render(<App />);
  const linkElement = screen.getByText("Pilot");
  expect(linkElement).toBeInTheDocument();
});
