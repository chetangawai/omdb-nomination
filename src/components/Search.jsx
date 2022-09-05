import React from 'react';
import {
  Grid,
  Container,
  Typography,
  InputAdornment,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';

const Search = ({ searchMovie, changeHandler }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovie();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h6" component="div">
            Search movie
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                type="search"
                placeholder="Type movie title to search"
                inputProps={{ 'aria-label': 'search movie title' }}
                onChange={(e) => changeHandler(e.target.value)}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

Search.propTypes = {
  searchMovie: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Search;
