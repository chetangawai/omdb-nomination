import { getMovies } from '../../services/OmdbSearch';

export const searchMovie = (movieName) => {
  return async (dispatch) => {
    dispatch(getMovie())
    try {
      const response = await getMovies(movieName);
      dispatch(getMovieSuccess(response.data.Search))
      
    } catch (error) {
      dispatch(getMovieFailure())
    }
  }
};
export const getMovie = () => ({
  type: "GET_MOVIE_START",
})

export const getMovieSuccess = (movies) => ({
  type: "GET_MOVIE_SUCCESS",
  payload: movies,
})

export const getMovieFailure = () => ({
  type: "GET_MOVIE_FAILURE",
})