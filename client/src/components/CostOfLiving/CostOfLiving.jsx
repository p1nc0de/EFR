import {
  Button, Grid, Stack,
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

  const [curr, setCurr] = useState('');

  // const [k, setK] = useState(1);
  // const currency = useSelector((s) => s.currencies);

  // const handleChange = (e) => {
  //   setCurr(e.target.value);
  // };

  // const curCur = { EUR }

  // useEffect(() => {
  //   dispatch(fetchCurrencies(curr));
  // }, [curr]);

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
      <Grid item>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={onClickHandler}
            variant="contained"
            size="lagre"
            endIcon={<CurrencyExchangeIcon />}
            sx={{
              textDecoration: 'none', backgroundColor: 'red', color: 'black', '&:hover': { backgroundColor: 'black', color: 'red' },
            }}
          >
            Сменить валюту
          </Button>
        </Stack>
      </Grid>
      {/* <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Выбрать валюту</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={curr}
            label="Выбрать валюту"
            onChange={handleChange}
          >
            <MenuItem value="USD">Доллар США</MenuItem>
            <MenuItem value="EUR">Евро</MenuItem>
            <MenuItem value="RUB">Рубль</MenuItem>
            <MenuItem value="THB">Тайский Бат</MenuItem>
            <MenuItem value="AED">Дирхам ОАЭ</MenuItem>
            <MenuItem value="TRY">Турецкая Лира</MenuItem>
            <MenuItem value="KZT">Казахский Тенге</MenuItem>
            <MenuItem value="GEL">Грузинский Лари</MenuItem>
            <MenuItem value="AMD">Армянский Драм</MenuItem>
            <MenuItem value="BTC">Биткоин</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
      <div className="leaderboard">
        <div className="leaderboard__profiles">
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средний расход в месяц</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.cost_living} | ${(oneCity?.Costs[0]?.cost_living * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏠 Аренда 1 комнатной квартиры в центре</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.apartment} | ${(oneCity?.Costs[0]?.apartment * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏨 Гостиница на месяц</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.hotel} | ${(oneCity?.Costs[0]?.hotel * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🏢 Коворкинг на месяц</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.coworking} | ${(oneCity?.Costs[0]?.coworking * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍛 Обед</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.dinner} | ${(oneCity?.Costs[0]?.dinner * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">🍺 Пиво (0.5)</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.beer} | ${(oneCity?.Costs[0]?.beer * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">☕️ Капучино</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.cappuccino} | ${(oneCity?.Costs[0]?.cappuccino * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">👶 Детский сад на месяц</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.kindergarten} | ${(oneCity?.Costs[0]?.kindergarten * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">⛽ Бензин (1 л)</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.petrol} | ${(oneCity?.Costs[0]?.petrol * cross).toFixed(0)} ₽`}</span>
          </article>
          <article className="leaderboard__profile">
            <span className="leaderboard__name">💵 Средняя зарплата</span>
            <span className="leaderboard__value">{`$ ${oneCity?.Costs[0]?.salary} | ${(oneCity?.Costs[0]?.salary * cross).toFixed(0)} ₽`}</span>
          </article>
        </div>
      </div>
    </Grid>
  );
}

export default CostOfLiving;
