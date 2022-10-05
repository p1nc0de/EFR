import React, { useState } from 'react';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import {
  Avatar, Box, Container, TextField, Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
// import { useNavigate } from 'react-router-dom';
import { signupUserAsync } from '../../redux/actions/authActions';

const theme = createTheme({
  palette: { primary: { main: '#FFFFFF' } },
});

export default function Signup({ setOpenR }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    dispatch(signupUserAsync(data, setLoading))
      .then(() => setOpenR(false));
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
            <HailOutlinedIcon />
          </Avatar>
          <Typography color="white" component="h1" variant="h5">
            Зарегистрироваться
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              // required
              fullWidth
              id="login"
              label="Имя"
              name="login"
              autoFocus
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              id="email"
              label="Email"
              name="email"
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
            />
            <LoadingButton
              loading={loading}
              color="success"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2, bgcolor: 'gray',
              }}
            >
              Присоединиться
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
