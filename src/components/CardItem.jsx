import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Avatar, Grid, Divider, Button } from "@mui/material";
import { nominateMovies, showNominationBanner } from "../redux/actions";
import PropTypes from "prop-types";

const CardItem = ({ item, type }) => {
  const dispatch = useDispatch();
  const nominatedMovies = useSelector(
    (state) => state.movieReducer.nominatedMovies
  );
  const showBanner = useSelector((state) => state.movieReducer.showBanner);
  const movies = useSelector((state) => state.movieReducer.movies);

  const handleNominate = (item) => {
    const nominationsDuplicate = [...nominatedMovies];
    if (nominationsDuplicate.length <= 4) {
      nominationsDuplicate.push(item);
      dispatch(nominateMovies(nominationsDuplicate));
      manageButtonState(item.imdbID, true);
    } 
    else {
      dispatch(showNominationBanner(true));
    }
  };

  const manageButtonState = (id, state) => {
    const results = [...movies];
    results.forEach((movie) => {
      if (movie.imdbID === id) {
        return (movie.isNominated = state);
      }
    });
  };

  const removeNomination = (nominee) => {
    let nominationsDuplicate = [...nominatedMovies];
    const newNominationsArray = nominationsDuplicate.filter((nom) => {
      return nom.imdbID !== nominee.imdbID;
    });
    dispatch(nominateMovies(newNominationsArray));
    if (newNominationsArray.length < 5 && showBanner) {
      dispatch(showNominationBanner(false));
    }
    manageButtonState(nominee.imdbID, false);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} style={{ padding: 10 }}>
        <Grid item>
          <Avatar alt="Movie poster" src={item.Poster}  sx={{ width: 80, height: 80 }}/>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" component="div">
            {`${item.Title}(${item.Year})`}
          </Typography>
          {type === "nomination" ? (
            <Button
              size="small"
              variant="contained"
              color="warning"
              onClick={() => removeNomination(item)}
            >
              Remove
            </Button>
          ) : (
            <Button
              size="small"
              variant="contained"
              onClick={() => handleNominate(item)}
              disabled={item.isNominated}
            >
              Nominate
            </Button>
          )}
        </Grid>
      </Grid>
      <Divider light />
    </React.Fragment>
  );
};
export default CardItem;

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};