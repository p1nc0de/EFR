import {
  Divider, ListItemText, Grid, CardActionArea, CardMedia, Card,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllCities } from '../../redux/actions/cityActions';
import CityNavbar from '../UI/CityNavbar';
import PhotoBackground from '../UI/PhotoBackground';
import './index.scss';

function Scores() {
  const { city } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);
  const { id } = useParams();
  const oneCity = city[id - 1];
  console.log(oneCity?.map_url);

  const eng = Math.round(((oneCity?.english_speaking) / 5) * 100);
  const quality = oneCity?.quality_of_life;

  return (
    <Grid container direction="column" sx={{ color: 'text.primary' }}>
      <Grid item>
        <PhotoBackground oneCity={oneCity} />
      </Grid>
      <Grid item>
        <CityNavbar />
      </Grid>

      <div className="leaderboard__profiles">
        <article className="leaderboard__profile">
          <span className="leaderboard__name">⭐️ Общий рейтинг</span>
          <span className="leaderboard__value">{`${oneCity?.rating}`}</span>
        </article>
        <article className="leaderboard__profile">
          <span className="leaderboard__name">📡 Интернет</span>
          <span className="leaderboard__value">{`${oneCity?.internet}`}</span>
        </article>
        <article className="leaderboard__profile">
          <span className="leaderboard__name">💵 Стоимость проживания (USD)</span>
          <span className="leaderboard__value">{`${oneCity?.Costs[0]?.cost_living}`}</span>
        </article>
        <article className="leaderboard__profile">
          <span className="leaderboard__name">💰 Средняя зарплата (USD)</span>
          <span className="leaderboard__value">{`${oneCity?.Costs[0]?.salary}`}</span>
        </article>
        <article className="leaderboard__profile">
          <span className="leaderboard__name">💵 Стоимость проживания (USD)</span>
          <span className="leaderboard__value">{`${oneCity?.Costs[0]?.cost_living}`}</span>
        </article>
      </div>


        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
          <ListItemText className="leaderboard__name" primary="📡 Интернет" />
        </Grid>
        <Grid item>
          <ListItemText className="leaderboard__value" primary={`${oneCity?.internet}`} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
          <ListItemText primary="💵 Стоимость проживания (USD)" />
        </Grid>
        <Grid item>
          <ListItemText primary={`${oneCity?.Costs[0]?.cost_living}`} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
          <ListItemText primary="💰 Средняя зарплата (USD)" />
        </Grid>
        <Grid item>
          <ListItemText primary={`${oneCity?.Costs[0]?.salary}`} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
          <ListItemText primary="⭐️ Качество жизни" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.quality_of_life}`) / 5} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
          <ListItemText primary="👶 Удобство для семьи" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.family_score}`) / 5} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
          <ListItemText primary="👮 Безопасность" />
        </Grid>
        <Grid item>
          <ListItemText primary={(`${oneCity?.safety}`) / 5} />
        </Grid>
        <Divider />
        <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} className="leaderboard__profile">
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
        <Divider /> */}

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
    </Grid>
  );
}

export default Scores;
