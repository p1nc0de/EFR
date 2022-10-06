import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { Link } from 'react-router-dom';

export default function Cards({ city }) {
  return (
    <Link to={`/${city.id}/scores`} style={{ textDecoration: 'none' }}>
      <Box
        component="ul"
        sx={{
          display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0.5,
        }}
      >
        <Card
          component="li"
          sx={{
            minWidth: 300, flexGrow: 1, minHeight: 300, maxHeight: 300, opacity: 0.75, '&:hover': { opacity: 1 },
          }}
        >
          <CardCover>
            <img
              src={city.photo}
              srcSet={city.photo}
              alt={`${city.name}`}
            />
          </CardCover>
          <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
            <div className="podlogka">
              <h3>{city.name}</h3>
              <p>{`Лучший район: ${city.best_nbh}`}</p>
              <p>{`Неплохой район: ${city.upcoming_nbh ? city.upcoming_nbh : 'такого нет'}`}</p>
            </div>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
}
