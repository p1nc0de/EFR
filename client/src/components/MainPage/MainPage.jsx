import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { fetchAllCities } from '../../redux/actions/cityActions';
import Video from './Video';
import Cards from './Cards';
import Countybuttons from './Countybuttons';
import CardRegistr from './CardRegistr';
import { checkAuthAsync } from '../../redux/actions/authActions';

function MainPage() {
  const city = useSelector((s) => s.city);
  // console.log(city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCities());
    dispatch(checkAuthAsync());
  }, []);
  return (
    <Grid container>
      <Grid item sx={{ height: '400px', width: '100%' }}>
        <Video />
      </Grid>
      {/* <Grid item  alignItems='flex-end' sx={{ position: 'absolute' }}> */}
      <Grid item sx={{ position: 'absolute' }}>
        <Grid
          container
          direction="row-reverse"
          alignItems="center"
        >
          <Grid item sx={{ marginLeft: '53vw', marginTop: '5vw' }}>
            <CardRegistr />
          </Grid>
          <Grid items sx={{ magrinLeft: '5vw', marginTop: '-5vw' }}>
            <div className="textCont">
              <img src="001-planet-earth.png" alt="EFR" />
              <div className="beznaz">
                <div className='logoHigh'>
                  <h1>EFR</h1>
                </div>
                <div className='logoLow'>
                  <h4>the future is in your hands</h4>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ bgcolor: '#101010' }}>
        <Countybuttons />
        <Grid container spacing={2}>
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
