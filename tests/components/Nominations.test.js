import React from 'react';
import { render, screen } from '../testUtils';
import Nomination from '../../src/components/Nomination';
import { movieData } from '../fixtures/omdb';

describe("Nomination test", () => {
  test("Should show the number of movies nominated", async () => {
    render(<Nomination items={movieData} />);
    expect(screen.getByText(/(8 movies nominated)/i)).toBeInTheDocument();
  });
});