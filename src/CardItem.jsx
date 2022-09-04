import React from 'react';
import { Typography, Avatar, Grid, Divider, Link, Button } from '@mui/material';

const CardItem = ({ item }) => {

  const handleNominate = (item) => {
    console.log('in handleNominate');
  }

  return (
    <React.Fragment>
      {/* <Link href={item.html_url} underline="none" target="_blank" rel="noopener"> */}
        <Grid container spacing={2} style={{ padding: 10 }}>
          <Grid item xs={2}>
            <Avatar
              alt="Movie poster"
              src={item.Poster}
              sx={{ width: 40, height: 40 }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography gutterBottom variant="h6" component="div">
              {`${item.Title}(${item.Year})`}
            </Typography>
            <Button onClick={handleNominate}>Nominate</Button>
          </Grid>
        </Grid>
        <Divider light />
      {/* </Link> */}
    </React.Fragment>
  );
};
export default CardItem;
