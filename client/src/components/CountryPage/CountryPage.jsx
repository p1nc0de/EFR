
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryCities, setCountryCities } from '../../redux/actions/cityActions';
import { Box } from '@mui/system';
import Countybuttons from '../MainPage/Countybuttons';
import Cards from '../MainPage/Cards';
import Video from '../MainPage/Video';
import { useParams } from 'react-router-dom';
import TextCard from '../Reviews/TextCard';

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
        <>
            <Box>
                <Box sx={{ height: '400px', bgcolor: 'primary.main' }} >
                    <Video />
                </Box>

                <Countybuttons />

                <Box sx={{ display: 'flex' }}>
                    {city && city?.map((el) => (
                        <Cards key={el.id} city={el} id={el.id} />
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default CountryPage;