import {
  Divider, ListItemText, Grid, CardActionArea, CardMedia, CardContent, Typography, Card,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { fetchOneCity } from '../../redux/actions/cityActions';

function Scores() {
  const { city } = useSelector((s) => s);
  const { id } = useParams();
  const oneCity = city[id - 1];
  console.log(oneCity);
  console.log(oneCity?.map_url);

  return (
    <>
      <Grid
        container
        xs={6}
        spacing={0.5}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="⭐️ Общий рейтинг" />
        </Grid>
        <Grid item>
          <ListItemText primary={`${oneCity?.rating}`} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="📡 Интернет" />
        </Grid>
        <Grid item>
          <ListItemText primary={`${oneCity?.internet}`} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="💵 Стоимость проживания (USD)" />
        </Grid>
        <Grid item>
          <ListItemText primary={`${oneCity?.Costs[0]?.cost_living}`} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="💰 Средняя зарплата (USD)" />
        </Grid>
        <Grid item>
          <ListItemText primary={`${oneCity?.Costs[0]?.salary}`} />
        </Grid>
        <Divider />
      </Grid>

      <Grid
        container
        xs={6}
        spacing={0.5}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea href={oneCity?.map_url} target="_blank">
            <CardMedia
              component="img"
              height="400"
              src={oneCity?.map_screen}
              alt={oneCity?.name}
            />
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default Scores;
