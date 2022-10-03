import {
  ListItemText, Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllCities } from '../../redux/actions/cityActions';

function CostOfLiving() {
  const { city } = useSelector((s) => s);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);
  const { id } = useParams();
  const oneCity = city[id - 1];
  const currency = '$';

  return (
    <Box sx={{ width: '60%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={6}
          sx={{
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="💵  Общий расход в месяц" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.cost_living}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="🏠 Аренда 1 комнатной квартиры в центре" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.apartment}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="🏨 Гостиница на месяц" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.hotel}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="🏢 Коворкинг на месяц" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.coworking}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="🍛 Обед" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.dinner}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="🍺 Пиво (0.5)" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.beer}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="☕️ Капучино" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.cappuccino}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="👶 Детский сад на месяц" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.kindergarten}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="⛽ Бензин (1 литр)" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.petrol}`} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary="💵 Средняя зарплата" />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            bgcolor: 'background.paper',
            m: 1,
            border: 1,
            width: '5rem',
            height: '5rem',
            borderColor: 'grey.500',
          }}
        >
          <ListItemText primary={`${currency} ${oneCity?.Costs[0]?.salary}`} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CostOfLiving;
