import  React, {useState} from 'react';
import { Grid, Container,Box } from '@mui/material';
import Search from '../Search';
import SearchResult from '../SearchResult';

import { useSelector, useDispatch } from "react-redux";
// import { searchMovie } from "../redux/actions";

export default function App(props) {
  console.log('props', props)

  const [searchQuery, setSearchQuery] = useState('');
  // const [movies, setMovies] = useState([]);
  const movies = useSelector((state) => state.movies);
  console.log('movies from state', movies);
  const dispatch = useDispatch();

  const handleQueryChange = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handleSubmit = () => {
    dispatch(props.searchMovie(searchQuery));
  };

  // async function fetchMovies() {
  //   try {
  //     const response = await getMovies(searchQuery);
  //     console.log('response', response);
  //     setMovies(response.data.Search);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <Container 
    //sx={{mt: (th)=>th.spacing(10)}}
    >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <Search searchUser={handleSubmit} changeHandler={handleQueryChange}/>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <SearchResult items={movies} />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          Nomination
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
