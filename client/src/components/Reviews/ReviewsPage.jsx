import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneCity } from '../../redux/actions/oneCityActions';
import { fetchCityReviews } from '../../redux/actions/reviewActions';
import CityNavbar from '../UI/CityNavbar';
import PhotoCard from './PhotoCard';
import TextAreaInput from './TextAreaInput';
import TextCard from './TextCard';

function ReviewsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const review = useSelector((state) => state.review);
  const authUser = useSelector((store) => store.authUser);
  useEffect(() => {
    dispatch(fetchOneCity(id));
    dispatch(fetchCityReviews(id));
  }, []);

  // console.log(review);

  return (

    <Box sx={{ bgcolor: '#101010' }}>
      <PhotoCard />
      <CityNavbar />

      {authUser?.id ? (
        <TextAreaInput id={id} />
      )
        : (<h1 style={{ color: 'red' }}>Чтобы оставить отзыв - необходимо зарегистрироваться!</h1>)}
      <Grid container direction="column" sx={{ color: 'text.primary' }}>
        <Grid item>
          {review && review?.map((el) => (
            <TextCard authUser={authUser} key={el.id} id={el.id} rev={el} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReviewsPage;
