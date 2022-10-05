import React, { useState } from 'react';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import {
  Avatar, Box, Container, TextField, Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// import { useNavigate } from 'react-router-dom';

import { loginUserAsync } from '../../redux/actions/authActions';

const theme = createTheme({
  palette: {
    primary: { main: '#FFFFFF' },
  },
});

export default function LoginPage({ setOpen }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    console.log(data);
    dispatch(loginUserAsync(data, setLoading))
      .then(() => setOpen(false));
    // navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'gray' }}>
            <EmojiPeopleOutlinedIcon />
          </Avatar>
          <Typography color="white" component="h1" variant="h5">
            Войти
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              error
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              error
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
            />
            <LoadingButton
              loading={loading}
              //   variant="outlined"
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, bgcolor: 'darkgray',
              }}
            >
              Войти
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
