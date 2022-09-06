import axios from "axios";
import { APP_CONFIG}  from "./../config";

export async function getMovies(searchQuery) {
  return await axios.get(
    buildSearchUrl(searchQuery)
  );
}

function buildSearchUrl(searchQuery){
  return `${APP_CONFIG.OMDB_SEARCH_API}?apikey=${APP_CONFIG.OMDB_API_KEY}&s=${searchQuery}&type=movie`;
}