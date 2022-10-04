
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryCities, setCountryCities } from '../../redux/actions/cityActions';
import { Box } from '@mui/system';
import Countybuttons from '../MainPage/Countybuttons';
import Cards from '../MainPage/Cards';
import Video from '../MainPage/Video';
import { useParams } from 'react-router-dom';
import TextCard from '../Reviews/TextCard';
import { Grid, Typography } from '@mui/material';
import CardRegistr from '../MainPage/CardRegistr';

function CountryPage() {
    const { city } = useSelector((s) => s);
    // console.log(city);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(setCountryCities([]));
        dispatch(fetchCountryCities(id));
    }, [id]);
    return (
        <Grid container>
            <Grid item sx={{ height: '400px' }}>
                <Video />
            </Grid>
            {/* <Grid item  alignItems='flex-end' sx={{ position: 'absolute' }}> */}
            <Grid item sx={{ position: 'absolute' }}>
                <Grid
                    container
                    direction="row-reverse"
                    alignItems="center"
                >
                    <Grid item sx={{ marginLeft: '53vw', marginTop: '5vw' }}>
                        <CardRegistr />
                    </Grid>
                    <Grid items sx={{ magrinLeft: '5vw' }}>
                        <Typography variant="h2">
                            EFR
                        </Typography>
                        <Typography variant="h5">
                            the future is in your hands
                        </Typography>
                    </Grid>
                    {/* </div> */}
                </Grid>
            </Grid>
            <Grid item sx={{ bgcolor: 'text.disabled' }}>
                <Countybuttons />
                <Grid container spacing={2}>
                    {city && city?.map((el) => (
                        <Grid item xs={4} key={el.id}>
                            <Cards key={el.id} city={el} id={el.id} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CountryPage;