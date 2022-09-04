import React from 'react';
// import { makeStyles } from '@mui/styles';
import {
  TextField,
  Grid,
  // CssBaseline,
  Container,
  Typography,
  Button,
  InputBase,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CssBaseline from '@mui/material/CssBaseline';

const Search = ({ searchUser, changeHandler }) => {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    searchUser();
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <form
          //className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" component="div">
            Movie title
          </Typography>
          <Grid container spacing={1}>
          <Grid item xs={10}>
              {/* <TextField
                margin="none"
                id="outlined-secondary"
                variant="outlined"
                fullWidth={true}
                placeholder="Movie title"
                //onChange={(e) => changeHandler(e.target.value)}
                type="search"
              /> */}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                fullWidth
                placeholder="Search movie title"
                inputProps={{ 'aria-label': 'search movie title' }}
                onChange={(e) => changeHandler(e.target.value)}
              />
            </Grid>
          <Grid item xs={2}>
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Grid>
           
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
};

export default Search;
