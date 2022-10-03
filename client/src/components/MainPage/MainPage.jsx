import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { fetchAllCities } from '../../redux/actions/cityActions';
import Video from './Video';
import Cards from './Cards';
import Countybuttons from './Countybuttons';
import CardRegistr from './CardRegistr';
import { Grid, Typography } from '@mui/material';

function MainPage() {
  const { city } = useSelector((s) => s);
  // console.log(city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);
  return (
    <Grid container>
      <Grid item sx={{ height: '400px' }} >
        <Video />
      </Grid>
      {/* <Grid item  alignItems='flex-end' sx={{ position: 'absolute' }}> */}
      <Grid item sx={{ position: 'absolute' }}>
        <Grid
          container
          direction="row-reverse"
          alignItems="center"
        >
          <Grid item sx={{ marginLeft: '53vw', marginTop: '5vw' }} >
            <CardRegistr />
          </Grid>
          <Grid items sx={{ magrinLeft: '5vw' }}>
            <Typography variant='h2'>
              EFR
            </Typography>
            <Typography variant='h5'>
              the future is in your hands
            </Typography>
          </Grid>
          {/* </div> */}
        </Grid>
      </Grid>
      <Grid item sx={{ bgcolor: 'text.disabled' }}>
        <Countybuttons />
        <Grid container spacing={2} >
          {city && city?.map((el) => (
            <Grid item xs={4} key={el.id}>
              <Cards key={el.id} city={el} id={el.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid >
  );
}

export default MainPage;
