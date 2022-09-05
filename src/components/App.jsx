import React, { useState } from 'react';
import { Grid, Container, Box, Alert, Typography } from '@mui/material';
import Search from './Search';
import SearchResult from './SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovie, showNominationBanner } from '../redux/actions';
import Nomination from './Nomination';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movieReducer.movies) || [];
  const nominatedMovies = useSelector(
    (state) => state.movieReducer.nominatedMovies
  );
  const showBanner = useSelector((state) => state.movieReducer.showBanner);

  const handleQueryChange = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handleSubmit = () => {
    dispatch(searchMovie(searchQuery));
  };

  const handleClose = () => dispatch(showNominationBanner(false));

  return (
    <Container sx={{ mt: (th) => th.spacing(10) }}>
      <Box sx={{ flexGrow: 1 }}>
        {showBanner && (
          <Alert onClose={handleClose} severity="warning">
            You can nominate only 5 movies
          </Alert>
        )}
        <Grid container spacing={4} columnSpacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h4" align="center">Omdb Nomination</Typography>
            <Search
              searchMovie={handleSubmit}
              changeHandler={handleQueryChange}
            />
          </Grid>

          <Grid item xs={6} md={6} lg={6}>
            <SearchResult items={movies} />
          </Grid>
          <Grid item xs={6} md={6} lg={6}>
            <Nomination items={nominatedMovies} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}


