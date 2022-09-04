import axios from 'axios';
import { OMDB_SEARCH_API } from '../constants';

export async function getMovies(searchQuery) {
  return await axios.get(
    buildSearchUrl(searchQuery)
  );
}

function buildSearchUrl(searchQuery){
   return `${OMDB_SEARCH_API}?apikey=${import.meta.env.VITE_API_KEY}&s=${searchQuery}`;
}