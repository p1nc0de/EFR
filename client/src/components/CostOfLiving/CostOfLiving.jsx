import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllCities } from '../../redux/actions/cityActions';
import PhotoBackground from '../UI/PhotoBackground';
import CityNavbar from '../UI/CityNavbar';
import './index.scss';

function CostOfLiving() {
  const [k, setK] = useState(2.00);
  const { city } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  const { id } = useParams();
  const oneCity = city[id - 1];
  console.log(oneCity);

  const currency = 'usd';

  return (
    <Grid container direction="column" sx={{ color: 'text.primary', bgcolor: '#101010' }}>
      <Grid item >
        <PhotoBackground oneCity={oneCity} />
      </Grid>
      <Grid item>
        <CityNavbar />
      </Grid>
      <div className="leaderboard">
        <div className="leaderboard__profiles">
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средний расход в месяц</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.cost_living * k} ${currency} `}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏠 Аренда 1 комнатной квартиры в центре</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.apartment * k} ${currency} `}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏨 Гостиница на месяц</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.hotel} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏢 Коворкинг на месяц</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.coworking} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍛 Обед</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.dinner} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍺 Пиво (0.5)</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.beer} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">☕️ Капучино</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.cappuccino} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">👶 Детский сад на месяц</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.kindergarten} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">⛽ Бензин (1 л)</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.petrol} ${currency}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средняя зарплата</span>
            <span className="leaderboard__value">{`${oneCity?.Costs[0]?.salary} ${currency}`}</span>
          </article>
        </div>
      </div>
    </Grid>
  );
}

export default CostOfLiving;
