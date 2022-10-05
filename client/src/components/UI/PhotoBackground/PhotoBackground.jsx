import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function PhotoBackground({ oneCity }) {
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0,
      }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src={`${oneCity?.photo}`}
            srcSet={`${oneCity?.photo}`}
            alt="background"
          />
        </CardCover>
        <CardContent sx={{ justifyContent: 'flex-center', alignItems: 'center' }}>
          <Typography
            level="h3"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
            backgroundColor="#2F4F4F"
          >
            <h3>{`${oneCity?.name}`}</h3>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
