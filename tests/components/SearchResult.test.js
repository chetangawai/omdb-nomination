import React from 'react';
import { render, screen } from '../testUtils';
import SearchResult from '../../src/components/SearchResult';
import { movieData } from '../fixtures/omdb';

describe("SearchResult test", () => {
  test("Should show the number of results found", async () => {
    render(<SearchResult items={movieData} />);
    expect(screen.getByText(/(8 movies found)/i)).toBeInTheDocument();
  });
});