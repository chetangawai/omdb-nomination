import { getMovies } from "../../services/OmdbSearch";
import { GET_MOVIE_START, GET_MOVIE_SUCCESS, GET_MOVIE_FAILURE, NOMINATE_MOVIE, SHOW_NOMINATION_BANNER } from "./../constants";

export const searchMovie = (movieName) => {
  return async (dispatch)=> {
    dispatch(getMovie())
    try {
      const response = await getMovies(movieName);
      const movieData = response.data.Search.map(movie => {
        const movieObj = {...movie}
        movieObj.isNominated = false;
        return movieObj;
      });
      dispatch(getMovieSuccess(movieData))
      
    } catch (error) {
      dispatch(getMovieFailure())
    }
  }
};

export const getMovie = () => ({
  type: GET_MOVIE_START,
});

export const getMovieSuccess = (movies) => ({
  type: GET_MOVIE_SUCCESS,
  payload: movies,
});

export const getMovieFailure = () => ({
  type: GET_MOVIE_FAILURE,
});

export const nominateMovies = (movies) => ({
  type: NOMINATE_MOVIE,
  payload: movies,
});

export const showNominationBanner = (flag) => ({
  type: SHOW_NOMINATION_BANNER,
  payload: flag,
})