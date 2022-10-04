import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAsync } from '../../redux/actions/authActions';

export default function CardRegistr() {
  const authUser = useSelector((store) => store.authUser);
  const dispatch = useDispatch();

  console.log(authUser);
  return (
    <Box>
      <Card sx={{ maxWidth: 300, bgcolor: 'text.disabled' }}>
        <CardMedia
          style={{ padding: '5px', borderRadius: '10px' }}
          component="img"
          alt="Надо зарегаться"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjEw5JZ9OZd3xQx6bd2ENSgMnACsS7xt2Rw&usqp=CAU"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h6" component="div">
                        Зарегистрируйся
                    </Typography> */}
        </CardContent>
        {authUser?.id ? (
          <CardActions>
            <Button component={NavLink} to={`/users/${authUser.id}`} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none' }}>
              Личный кабинет
            </Button>
            <Button onClick={() => dispatch(logoutUserAsync())} variant="contained" color="error" size="sm" sx={{ textDecoration: 'none' }}>
              Выйти
            </Button>
          </CardActions>
        )
          : (
            <CardActions>
              <Button component={NavLink} to="/login" variant="contained" color="error" size="sm" sx={{ textDecoration: 'none' }}>
                Войти
              </Button>
              <Button component={NavLink} to="/signup" variant="contained" color="error" size="sm" sx={{ textDecoration: 'none' }}>
                Зарегаться
              </Button>
            </CardActions>
          )}

      </Card>
    </Box>
  );
}
