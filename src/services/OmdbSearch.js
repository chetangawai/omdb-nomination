import axios from "axios";
import { OMDB_SEARCH_API } from "../constants";
import { APP_CONFIG}  from "./../config";

export async function getMovies(searchQuery) {
  return await axios.get(
    buildSearchUrl(searchQuery)
  );
}

function buildSearchUrl(searchQuery){
  return `${OMDB_SEARCH_API}?apikey=${APP_CONFIG.OMDB_API_KEY}&s=${searchQuery}&type=movie`;
}