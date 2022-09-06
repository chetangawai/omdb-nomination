import React from "react";
import CardItem from "./CardItem";
import {
  Typography,
  CssBaseline,
  Divider,
  Container,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";

const SearchResult = ({ items }) => {
  if (!items) return null;

  return (
    <Container maxWidth="md">
      <Box>
        <CssBaseline />
        <Typography gutterBottom variant="h6" component="div">
          Search Result {items.length > 0 && `(${items.length} movies found)`}
        </Typography>
        <Divider />
        <div className="results">
          {items.map((item) => (
            <CardItem key={item.imdbID} type="search_result" item={item} />
          ))}
        </div>
      </Box>
    </Container>
  );
};

SearchResult.propTypes = {
  items: PropTypes.array.isRequired,
};


export default SearchResult;
