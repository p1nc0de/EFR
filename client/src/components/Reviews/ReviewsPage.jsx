import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllReviews } from '../../redux/actions/reviewActions';
import CityNavbar from '../UI/CityNavbar';
import PhotoCard from './PhotoCard';
import TextAreaInput from './TextAreaInput';
import TextCard from './TextCard';

function ReviewsPage() {
    const dispatch = useDispatch();
    const review = useSelector((state) => state.review)
    console.log(1);
    useEffect(() => {
        dispatch(fetchAllReviews());
    }, []);
    return (
        <>
            <Grid container direction="column" sx={{ bgcolor: 'primary.main', color: 'text.primary' }}>
                <Grid item>
                    <PhotoCard />
                </Grid>
                <Grid item>
                    <CityNavbar />
                </Grid>
                <Grid item xs={8}>
                    <TextAreaInput />
                </Grid>
                <Grid item sx={{ height: '500px' }}>
                    {review && review?.map((el) => (
                        <TextCard key={el.id} id={el.id} rev={el} />
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

export default ReviewsPage;