import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useSelector } from 'react-redux';

export default function PhotoCard() {
  const oneCity = useSelector((state) => state.oneCity);

  return (

    <Box
      component="ul"
      sx={{
        display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0,
      }}
    >
      <Card component="li" sx={{ minWidth: 400, flexGrow: 1, height: 390 }}>
        <CardCover>

          <img
            src={oneCity.photo ? (`${oneCity?.photo}`) : ('/карта аааа.jpg')}
            // srcSet={oneCity.photo ? (`${oneCity?.photo}`) : ('/карта аааа.jpg')}
            alt="Помогите, меня заставляют работать по выходным"
          />
        </CardCover>
        <div className="dark" />
        <CardContent sx={{ justifyContent: 'flex-center', alignItems: 'center' }}>
          <Typography
            level="h1"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            <h1>{oneCity.name ? (`${oneCity?.name}`) : ('')}</h1>
          </Typography>
        </CardContent>
      </Card>
    </Box>

  );
}
