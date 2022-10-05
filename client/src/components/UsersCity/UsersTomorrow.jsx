import React from 'react';
// import { NavLink } from 'react-router-dom';
import {
//   Avatar,
  Grid,
} from '@mui/material';
import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

export default function UsersTomorrow() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      spacing={2}
    >
      <Typography
        textColor="#fff"
        mt={{ sm: 5 }}
      >
        <h3>Планируют переехать</h3>
      </Typography>
    </Grid>
  );
}
