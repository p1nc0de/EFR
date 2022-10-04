import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { fetchCountryCities, setCountryCities } from '../../redux/actions/cityActions';
import Countybuttons from '../MainPage/Countybuttons';
import Cards from '../MainPage/Cards';
import Video from '../MainPage/Video';

function CountryPage() {
  const city = useSelector((s) => s.city);
  // console.log(city);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setCountryCities([]));
    dispatch(fetchCountryCities(id));
  }, [id]);
  return (
    <Box>
      <Box sx={{ height: '400px', bgcolor: 'primary.main' }}>
        <Video />
      </Box>

      <Countybuttons />

      <Box sx={{ display: 'flex' }}>
        {city && city?.map((el) => (
          <Cards key={el.id} city={el} id={el.id} />
        ))}
      </Box>
    </Box>
  );
}

export default CountryPage;
