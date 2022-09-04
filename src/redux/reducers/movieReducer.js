
import { getMovies } from '../../services/OmdbSearch';

const inititalState = {movies: [], nominatedMovies: [] };

export const movieReducer = (state = inititalState, action) => {
  console.log('inititalState', inititalState)
  switch (action.type) {

    case "SEARCHMOVIE": {
      const movies = [
        {
            "Title": "Raazi",
            "Year": "2018",
            "imdbID": "tt7098658",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZmVhN2JlYjEtZWFkOS00YzE0LThiNDMtMGI3NDA1MTk2ZDQ2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "Title": "Pata Nahi Rabb Kehdeyan Rangan Ch Raazi",
            "Year": "2012",
            "imdbID": "tt2255915",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTViMGYwYzctNjM4NS00OGQ5LTkwODMtYTBiNDRlN2FiYjIzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        }
    ];
      console.log('state', { ...state, movies })
      return { ...state, movies }
    
       return getMovies(action.payload).then((response) => {
        console.log('state', state);
        console.log('response', response.data.Search);
        return { ...state, movies: response.data.Search }
      })
     
    }
    case "NOMINATEMOVIE": {
      return { ...state, movie: action.payload };
    }
  }
  return state;
};
// export default movieReducer;