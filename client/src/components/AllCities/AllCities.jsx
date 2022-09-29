import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCities } from '../../redux/actions/cityActions';
import CityCard from '../CityCard';

export default function Favs() {
  const { city } = useSelector((s) => s);
  console.log(city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  return (
    <div className="container" style={{ display: 'flex', justifyConetnt: 'center' }}>
      <ul className="list-group">
        {city && city?.map((el) => (
          <CityCard key={el.id} city={el} id={el.id} />
        ))}
      </ul>
    </div>
  );
}
