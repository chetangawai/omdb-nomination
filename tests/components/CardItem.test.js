import React from 'react';
import { render, screen } from '../testUtils';
import CardItem from '../../src/components/CardItem';
import { movieData } from '../fixtures/omdb';

describe("CardItem test", () => {
  test("Should show movie title and release date", () => {
    const movie = movieData[0];
    render(<CardItem item={movieData[0]} type="search_result" />);
    const title = `${movie.Title}(${movie.Year})`;

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("Should show nominate button for card in search result", () => {
    render(<CardItem item={movieData[0]} type="search_result" />);
    const nominateButton = screen.getByRole('button', { name: /Nominate/i });
    expect(nominateButton).toBeInTheDocument();
    expect(nominateButton).not.toHaveAttribute('disabled', '');
  });

  test("Should show remove button in nomination list", () => {
    render(<CardItem item={movieData[0]} type="nomination" />);
    expect(screen.getByRole('button', { name: /Remove/i })).toBeInTheDocument();
  });
});