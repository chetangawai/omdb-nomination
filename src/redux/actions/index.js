export const searchMovie = (movie) => {
  return {
    type: "SEARCHMOVIE",
    payload: movie,
  };
};