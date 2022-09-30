
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCities } from '../../redux/actions/cityActions';
import Video from './Video';
import Cards from './Cards';
import Countybuttons from './Countybuttons';
import { Box } from '@mui/system';

function MainPage() {
    const { city } = useSelector((s) => s);
    console.log(city);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCities());
    }, []);
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

export default MainPage;