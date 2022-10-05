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

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   borderRadius: '10%',
//   boxShadow: 24,
//   p: 4,
// };

export default function UsersCity() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);
  const { city } = useSelector((s) => s);
  const oneCity = city[id - 1];

  const users = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getAllUsers(id));
  }, []);

  // console.log('main', id);
  // console.log('main', city);
  // console.log('main', oneCity);

  // const [open, setOpen] = React.useState(false);

  return (
    <Grid container direction="column" sx={{ color: 'text.primary' }}>
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
