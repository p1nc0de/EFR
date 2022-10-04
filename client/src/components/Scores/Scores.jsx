import {
  Grid, CardActionArea, CardMedia, Card, Box,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
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
      <div className="leaderboard">
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
            <span className="leaderboard__name">⭐️ Качество жизни</span>
            <span className="leaderboard__value">
              <Rating
                name="size-large"
                size="large"
                value={`${oneCity?.quality_of_life}`}
                readOnly
                precision={1}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name"> 👶 Удобство для семьи</span>
            <span className="leaderboard__value">
              <Rating
                name="size-large"
                size="large"
                value={`${oneCity?.family_score}`}
                readOnly
                precision={1}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">👮 Безопасность</span>
            <span className="leaderboard__value">
              <Rating
                name="size-large"
                size="large"
                value={`${oneCity?.safety}`}
                readOnly
                precision={1}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍹 Ночная жизнь</span>
            <span className="leaderboard__value">
              <Rating
                name="size-large"
                size="large"
                value={`${oneCity?.nightlife}`}
                readOnly
                precision={1}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
            </span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🗣️ Английский язык</span>
            <span className="leaderboard__value">
              <div className="progress" width="150">
                <div style={{ width: `${eng}%` }} className="progress__inner">
                  <p>{`${eng}/100`}</p>
                </div>
              </div>
            </span>
          </article>
        </div>
      </div>

      {/* <Grid
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
      </Grid> */}
    </Grid>
  );
}

export default Scores;
