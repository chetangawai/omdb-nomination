import React from 'react';
import { render, screen, waitFor } from '../testUtils';
import Search from '../../src/components/Search';
import userEvent from '@testing-library/user-event';

describe("Search test", () => {
  test("Should call changeHandler when movie is searched", async () => {
    const searchMovieSpy = jest.fn();
    const changeHandlerSpy = jest.fn();
    render(<Search searchMovie={searchMovieSpy} changeHandler={changeHandlerSpy} />);
    const element = screen.getByLabelText(/search movie title/);
    await userEvent.type(element, 'India');

    expect(changeHandlerSpy).toHaveBeenCalled();
  });

  test("Should call submitHandler when search icon is clicked", async () => {
    const searchMovieSpy = jest.fn();
    const changeHandlerSpy = jest.fn();
    render(<Search searchMovie={searchMovieSpy} changeHandler={changeHandlerSpy} />);
    const element = screen.getByLabelText(/search movie title/);
    await userEvent.type(element, 'India');
    userEvent.click(screen.queryByTestId('search-button'));

    await waitFor(() => {
      expect(searchMovieSpy).toHaveBeenCalled();
    });
  });
});