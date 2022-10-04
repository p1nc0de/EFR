import * as React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';

const theme = createTheme({
  palette: { primary: { main: '#2e2e36' } },
});

export default function Countybuttons() {
  return (
    <ThemeProvider theme={theme}>

      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Button
            component={NavLink}
            to="/"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red' },
            }}
          >
            Лучшие города
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to="/2"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red' },
            }}
          >
            Грузия
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to="/1"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red' },
            }}
          >
            Турция
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to="/8"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red' },
            }}
          >
            ОАЭ
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to="/6"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red' },
            }}
          >
            Португалия
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to="/9"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red' },
            }}
          >
            Тайланд
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
