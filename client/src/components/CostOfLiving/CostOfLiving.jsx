import {
  Box, FormControl, Grid, InputLabel, MenuItem, Select,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchAllCities } from '../../redux/actions/cityActions';
import PhotoBackground from '../UI/PhotoBackground';
import CityNavbar from '../UI/CityNavbar';
import './index.scss';

function CostOfLiving() {
  const [curr, setCurr] = useState();
  const [k, setK] = useState(1);
  const { city } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  const { id } = useParams();
  const oneCity = city[id - 1];
  console.log(oneCity);

  const currency = [{ USD }, { EUR }, { RUB }, { THB }, { AED }, { TRY }, { KZT }, { GEL }, { AMD }, { BTC },
  ];

  const handleChange = (e) => {
    setCurr(e.target.value);
  };

  const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: { have: 'USD', want: 'RUB', amount: '1' },
    headers: {
      'X-RapidAPI-Key': '1b7d5bba64msh7c9d3f71bf84163p16e835jsna426236a6792',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
    },
  };

  axios.request(options)
    .then((response) => setK(response.data))
    .catch((error) => {
      console.error(error);
    });

  console.log(curr);
  console.log(k);

  return (
    <Grid container direction="column" sx={{ color: 'text.primary', bgcolor: '#101010' }}>
      <Grid item>
        <PhotoBackground oneCity={oneCity} />
      </Grid>
      <Grid item>
        <CityNavbar />
      </Grid>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Выбрать валюту</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={curr}
            label="Выбрать валюту"
            onChange={handleChange}
          >
            <MenuItem value={USD}>Доллар США</MenuItem>
            <MenuItem value={EUR}>Евро</MenuItem>
            <MenuItem value={RUB}>Рубль</MenuItem>
            <MenuItem value={THB}>Тайский Бат</MenuItem>
            <MenuItem value={AED}>Дирхам ОАЭ</MenuItem>
            <MenuItem value={TRY}>Турецкая Лира</MenuItem>
            <MenuItem value={KZT}>Казахский Тенге</MenuItem>
            <MenuItem value={GEL}>Грузинский Лари</MenuItem>
            <MenuItem value={AMD}>Армянский Драм</MenuItem>
            <MenuItem value={BTC}>Биткоин</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
