
import { GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, NOMINATE_MOVIE, SHOW_NOMINATION_BANNER } from './../constants';

const initialState = { movies: [], nominatedMovies: [], loading: false, hasErrors: false, showBanner: false };

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
      return { ...state, nominatedMovies: action.payload };
    }
    case SHOW_NOMINATION_BANNER: {
      return { ...state, showBanner: action.payload };
    }
  }
  return state;
};