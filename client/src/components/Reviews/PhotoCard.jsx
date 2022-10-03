import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

function PhotoCard(props) {
  const { city } = useSelector((s) => s);
  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image="https://media.1777.ru/images/images_processing/651/6518490832801482.jpeg"
                // image={`${city?.photo}`}
        alt="Помогите, меня заставляют работать по выходным"
      />
      <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
        {/* <Typography
                    level="h6"
                    fontWeight="lg"
                    // textColor="#fff"
                    mt={{ xs: 12, sm: 18 }}
                > */}
        {/* {city?.name}
                </Typography> */}
      </CardContent>
    </Card>
  );
}

export default PhotoCard;
