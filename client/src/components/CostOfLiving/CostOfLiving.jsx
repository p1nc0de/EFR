import {
  Button, Grid, Stack, Box,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { fetchAllCities } from '../../redux/actions/cityActions';
import PhotoBackground from '../UI/PhotoBackground';
import CityNavbar from '../UI/CityNavbar';
import './index.scss';
// import { fetchCurrencies } from '../../redux/actions/currencyActions';

function CostOfLiving() {
  const { city } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  const { id } = useParams();
  const oneCity = city[id - 1];

  const cross = 60.52;

  const [curr, setCurr] = useState(true);

  const onClickHandler = () => {
    setCurr(!curr);
  };

  return (
    <Grid container direction="column" sx={{ color: 'text.primary', bgcolor: '#101010' }}>
      <Grid item>
        <PhotoBackground oneCity={oneCity} />
      </Grid>
      <Grid item>
        <CityNavbar />
      </Grid>

      <div className="leaderboard">
        <div className="leaderboard__profiles">
          <Box sx={{
            display: 'flex', justifyContent: 'flex-end', marginRight: 10, marginBottom: 1,
          }}
          >
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Button
                  onClick={onClickHandler}
                  variant="contained"
                  size="large"
                  width
                  endIcon={<CurrencyExchangeIcon />}
                  sx={{
                    textDecoration: 'none', backgroundColor: 'gray', color: 'black', '&:hover': { backgroundColor: 'black', color: 'red' },
                  }}
                >
                  Сменить валюту
                </Button>
              </Stack>
            </Grid>
          </Box>
          {/* <article className="leaderboard__profile2">
          </article> */}
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средний расход в месяц</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.cost_living}`}</span>
            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.cost_living * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏠 Аренда 1 комнатной квартиры в центре</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.apartment}`}</span>
            ) : (
              <span className="leaderboard__value">
                {`${(oneCity?.Costs[0]?.apartment * cross).toFixed(0)} ₽`}
              </span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏨 Гостиница на месяц</span>
            {curr ? (
              <span className="leaderboard__value">
                {`$ ${oneCity?.Costs[0]?.hotel}`}
              </span>
            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.hotel * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏢 Коворкинг на месяц</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.coworking}`}</span>
            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.coworking * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍛 Обед</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.dinner}`}</span>
            ) : (
              <span className="leaderboard__value">
                {`${(oneCity?.Costs[0]?.dinner * cross).toFixed(0)} ₽`}
              </span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍺 Пиво (0.5)</span>
            {curr ? (
              <span className="leaderboard__value">
                {`$ ${oneCity?.Costs[0]?.beer}`}
              </span>
            ) : (
              <span className="leaderboard__value">
                {`${(oneCity?.Costs[0]?.beer * cross).toFixed(0)} ₽`}
              </span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">☕️ Капучино</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.cappuccino}`}</span>

            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.cappuccino * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">👶 Детский сад на месяц</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.kindergarten}`}</span>
            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.kindergarten * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">⛽ Бензин (1 л)</span>
            {curr ? (
              <span className="leaderboard__value">
                {`$ ${oneCity?.Costs[0]?.petrol}`}
              </span>
            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.petrol * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средняя зарплата</span>
            {curr ? (
              <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.salary}`}</span>
            ) : (
              <span className="leaderboard__value">{`${(oneCity?.Costs[0]?.salary * cross).toFixed(0)} ₽`}</span>
            )}
          </article>
        </div>
      </div>
    </Grid>
  );
}

export default CostOfLiving;
