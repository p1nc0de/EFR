import React from 'react';
// import { ReactWeather } from 'react-open-weather-widget';
// import { useSelector } from 'react-redux';
// import { fetchAllCities } from '../../redux/actions/cityActions';
// import CityCard from '../CityCard';

export default function AllCities() {
  // const { city } = useSelector((s) => s);
  // console.log(city[0].Costs[0].salary);
  // console.log(city.Costs[0].beer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAllCities());
  // }, []);

  return (
    <div className="container" style={{ display: 'flex', justifyConetnt: 'center' }}>
      {/* <ul className="list-group">
        {city && city?.map((el) => (
          <CityCard key={el.id} city={el} id={el.id} />
        ))}
      </ul> */}
    </div>
  );
}
