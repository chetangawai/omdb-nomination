import React from "react";
import PropTypes from "prop-types";
import CardItem from "./CardItem";
import { Typography, CssBaseline, Divider, Container } from "@mui/material";

const Nomination = ({ items }) => {
  return (
    <Container maxWidth="md">
      <div className="results-container">
        <CssBaseline />
        <Typography gutterBottom variant="h6" component="div">
          Nominations {items.length > 0 && `(${items.length} movies nominated)`}
        </Typography>
        <Divider />
        <div className="results">
          {items.map((item) => (
            <CardItem key={item.imdbID} item={item} type="nomination"/>
          ))}
        </div>
      </div>
    </Container>
  );
};

Nomination.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Nomination;

