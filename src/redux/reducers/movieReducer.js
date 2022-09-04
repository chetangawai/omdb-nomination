
import { GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, NOMINATE_MOVIE } from './../constants';

const initialState = { movies: [], nominatedMovies: [], loading: false, hasErrors: false };

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_START: {
      return { ...state, loading: true }
    }
    case GET_MOVIE_SUCCESS: {
      return { ...state, loading: false, hasErrors: false, movies: action.payload }
    }
    case GET_MOVIE_FAILURE: {
      return { ...state, loading: false, hasErrors: true }
    }
    case NOMINATE_MOVIE: {
      return { ...state, movie: action.payload };
    }
  }
  return state;
};