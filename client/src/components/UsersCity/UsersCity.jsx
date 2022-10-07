import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import { getAllUsers } from '../../redux/actions/userActions';
import { fetchAllCities } from '../../redux/actions/cityActions';
import PhotoBackground from '../UI/PhotoBackground';
import CityNavbar from '../UI/CityNavbar';
import UsersToday from './UsersToday';
import UsersTomorrow from './UsersTomorrow';

// import UserPage from '../UserPage/UserPage';

export default function UsersCity() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { city } = useSelector((s) => s);
  const oneCity = city[id - 1];
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  const users = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUsers(id));
  }, []);

  return (
    <Grid container direction="column" sx={{ bgcolor: '#101010', color: 'text.primary' }}>
      <Grid item>
        <PhotoBackground oneCity={oneCity} />
      </Grid>
      <Grid item>
        <CityNavbar />
      </Grid>

      <UsersToday users={users} oneCity={oneCity} />
      <UsersTomorrow users={users} oneCity={oneCity} />
    </Grid>
  );
}
