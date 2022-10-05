import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar, Grid,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function UsersToday({ users, oneCity }) {
  console.log('today', oneCity);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={2}
      >
        <Typography
          textColor="#fff"
          mt={{ sm: 5 }}
        >
          {/* <h3>{`Уже живут в городе ${oneCity.name}`}</h3> */}
          <h3>Уже живут в городе</h3>
        </Typography>
      </Grid>
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
