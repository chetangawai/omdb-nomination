import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import { Typography, CssBaseline, Divider, Container } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";

const SearchResult = ({ items }) => {
  const movies = useSelector((state) => state.movies);
  console.log('movies in search res', movies);
  const [data, setData] = useState(items);

  useEffect(() => {
    setData(items);
  }, [items]);

  if(!items) return null;

  return (
    <Container maxWidth="md">
      <div className="results-container">
        <CssBaseline />
        <Typography gutterBottom variant="h6" component="div">
          {data.length} movies found
        </Typography>
        <Divider />
        <div className="results">
          {data.map((item) => (
            <CardItem key={item.imdbID} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};
export default SearchResult;
