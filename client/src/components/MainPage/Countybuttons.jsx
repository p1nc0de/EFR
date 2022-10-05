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
        marginBottom="10px"
        marginLeft="10px"
      >
        <Grid item>
          <Button
            component={NavLink}
            to="/"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
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
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
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
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
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
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
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
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
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
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            Тайланд
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
