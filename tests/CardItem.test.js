import React from 'react';
import { render, screen, waitFor } from './testUtils';
import CardItem from '../src/components/CardItem';

describe("CardItem test", () => {
    test("Should show title", () => {
      const item = {Title: "Lagaan: Once Upon a Time in India",
      Poster: "https://m.media-amazon.com/images/M/MV5BNmYxZGJlNmQtMWY3OS00Njc0LThjODgtOWEwMWU4NTUxMDExXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
      Type: "movie",
      Year: "2001",
      imdbID: "tt0169102"}
      render(<CardItem item={item} type="nomination" />);

      //expect(screen.getByText(/Hello/i)).toBeDefined()
    })
})