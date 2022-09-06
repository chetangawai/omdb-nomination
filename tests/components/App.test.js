import React from 'react';
import { render, screen } from '../testUtils';
import App from '../../src/components/App';

describe("App test", () => {
  test("Should show Search bar", () => {
    render(<App />);
    expect(screen.getByText(/Search movie/i)).toBeInTheDocument();
  });

  test("Should show Search Result", () => {
    render(<App />);
    expect(screen.getByText(/Search Result/i)).toBeInTheDocument();
  });

  test("Should show Nomination list", () => {
    render(<App />);
    expect(screen.getByText(/Nominations/i)).toBeInTheDocument();
  });
});