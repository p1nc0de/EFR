import * as React from 'react';
import Button from '@mui/material/Button';
import { NavLink, useParams } from 'react-router-dom';
import { createTheme, Grid, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: { primary: { main: '#2e2e36' } },
});
// const id = 1;
function CityNavbar() {
  const { id } = useParams();

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
            href="/"
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            На главную
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to={`/${id}/scores`}
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            Общая информация
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to={`/${id}/cost`}
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            Стоимость проживания
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to={`/${id}/users`}
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            Люди
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to={`/${id}/reviews`}
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            Отзывы
          </Button>
        </Grid>
        <Grid item>
          <Button
            component={NavLink}
            to={`/${id}/photos`}
            variant="contained"
            size="medium"
            sx={{
              textDecoration: 'none', backgoundColor: 'black', color: 'anger', '&:hover': { backgroundColor: 'red', color: 'black' },
            }}
          >
            Фото
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default CityNavbar;
