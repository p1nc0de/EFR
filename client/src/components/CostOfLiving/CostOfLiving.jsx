import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllCities } from '../../redux/actions/cityActions';
import PhotoBackground from '../UI/PhotoBackground';
import CityNavbar from '../UI/CityNavbar';
import './index.scss';

function CostOfLiving() {
  const { city } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);
  const { id } = useParams();
  const oneCity = city[id - 1];
  console.log(oneCity?.map_url);
  const currency = '$';

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
            <span className="leaderboard__name">💵 Средний расход в месяц</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.cost_living}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏠 Аренда 1 комнатной квартиры в центре</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.apartment}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏨 Гостиница на месяц</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.hotel}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏢 Коворкинг на месяц</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.coworking}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍛 Обед</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.dinner}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍺 Пиво (0.5)</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.beer}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">☕️ Капучино</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.cappuccino}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">👶 Детский сад на месяц</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.kindergarten}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">⛽ Бензин (1 л)</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.petrol}`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средняя зарплата</span>
            <span className="leaderboard__value">{`${currency} ${oneCity?.Costs[0]?.salary}`}</span>
          </article>
        </div>
      </div>
    </Grid>
  );
}

export default CostOfLiving;
