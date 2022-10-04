import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
          <Button component={NavLink} to="/" variant="contained" size="medium">
            Лучшие города
          </Button>
        </Grid>
        <Grid item>
          <Button sx={{ color: '##e30800' }} component={NavLink} to="/city/2" variant="contained" size="medium" style={{ textDecoration: 'none' }}>
            Грузия
          </Button>
        </Grid>
        <Grid item>
          <Button component={NavLink} to="/city/1" variant="contained" size="medium" style={{ textDecoration: 'none' }}>
            Турция
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="medium">
            Вьетнам
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="medium">
            Украина
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="medium">
            Пох куда
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
