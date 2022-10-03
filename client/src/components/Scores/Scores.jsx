import {
  Divider, ListItemText, Grid, CardActionArea, CardMedia, Card,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { fetchOneCity } from '../../redux/actions/cityActions';
import './index.scss';

function Scores() {
  const { city } = useSelector((s) => s);
  const { id } = useParams();
  const oneCity = city[id - 1];
  console.log(oneCity?.map_url);

  const eng = Math.round(((oneCity?.english_speaking) / 5) * 100);
  const quality = oneCity?.quality_of_life;

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
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="⭐️ Качество жизни" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.quality_of_life}`) / 5} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="👶 Удобство для семьи" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.family_score}`) / 5} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="👮 Безопасность" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.safety}`) / 5} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="🍹 Ночная жизнь" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.nightlife}`)} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          <ListItemText primary="🗣️ Английский язык" />
        </Grid>
        <Grid item>
          <div className="progress" width="150">
            <div style={{ width: `${eng}%` }} className="progress__inner">
              <p>{`${eng}/100`}</p>
            </div>
          </div>
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
