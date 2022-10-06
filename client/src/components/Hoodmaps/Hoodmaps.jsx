import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllCities } from '../../redux/actions/cityActions';
import CityNavbar from '../UI/CityNavbar';
import PhotoBackground from '../UI/PhotoBackground';

function Hoodmaps() {
  const { city } = useSelector((s) => s);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);
  const { id } = useParams();
  const oneCity = city[id - 1];

  return (
    <Grid container direction="column" sx={{ color: 'text.primary', bgcolor: '#101010' }}>
      <Grid item>
        <PhotoBackground oneCity={oneCity} />
      </Grid>
      <Grid item>
        <CityNavbar />
      </Grid>
      <div style={{
        width: '80%',
        marginLeft: '10%',
        marginTop: '1%',
      }}
      >
        <iframe title="tilte" src={`${oneCity?.nbhs_map}`} width="100%" height="700px" />
      </div>
    </Grid>
  );
}

export default Hoodmaps;
