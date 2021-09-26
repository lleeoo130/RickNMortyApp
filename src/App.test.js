import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText("Rick And Morty App... What?!");
  expect(linkElement).toBeInTheDocument();
});


test('renders EpisodeList', () => {
  render(<App />);
  const linkElement = screen.getByText("EpisodeList");
  expect(linkElement).toBeInTheDocument();
});
