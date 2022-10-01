import {
  Divider, ListItemText, Grid,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CostOfLiving() {
  const { city } = useSelector((s) => s);
  const { id } = useParams();
  const oneCity = city[id - 1];

  return (
    <Grid
      container
      xs={6}
      spacing={0.5}
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >

      <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <ListItemText primary="🏨 Гостиница на месяц" />
      </Grid>
      <Grid item>
        <ListItemText primary={`${oneCity?.Costs[0]?.hotel}`} />
      </Grid>
      <Divider />
      <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <ListItemText primary="🏢 Коворкинг на месяц" />
      </Grid>
      <Grid item>
        <ListItemText primary={`${oneCity?.Costs[0]?.coworking}`} />
      </Grid>
      <Divider />
      <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <ListItemText primary="🍛 Обед" />
      </Grid>
      <Grid item>
        <ListItemText primary={`${oneCity?.Costs[0]?.dinner}`} />
      </Grid>
      <Divider />
      <Grid item sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        <ListItemText primary="🍺 Пиво (0.5)" />
      </Grid>
      <Grid item>
        <ListItemText primary={`${oneCity?.Costs[0]?.beer}`} />
      </Grid>
      <Divider />
    </Grid>

  );
}

export default CostOfLiving;
