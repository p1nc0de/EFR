import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar, Grid,
  // Button,
  // CardActions,
  // Modal,
  // Box,
} from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getAllUsers } from '../../redux/actions/userActions';

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
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  // const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getAllUsers(id));
  }, []);

  return (
    <>
      <Typography variant="h2" component="div">
        Обитатели
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >

        {users && users?.map((user) => (
          <Grid
            container
            item
            xs={2}
            key={user.id}
            direction="column"
            justifyContent="center"
            alignItems="center"

          >
            <Card sx={{ minWidth: 275 }}>
              <CardContent justifyContent="center" alignItems="center">
                {user?.avatar?.includes('http')
                  ? (
                    <Avatar
                      alt="Remy Sharp"
                      src={user?.avatar}
                      sx={{ width: 170, height: 170 }}
                    />
                  )
                  : (
                    <Avatar
                      alt="Remy Sharp"
                      src={`http://localhost:3001/photos/${user?.avatar}`}
                      sx={{ width: 170, height: 170 }}
                    />
                  )}
              </CardContent>
              <CardActions>
                <Button component={NavLink} to={`/users/${user?.id}`} variant="contained" color="grey" size="sm" sx={{ textDecoration: 'none' }}>
                  {user?.login}
                </Button>

              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
