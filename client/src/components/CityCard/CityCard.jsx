import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function CityCard({ city }) {
  console.log(city.Costs[0].beer);
  console.log(city);
  // const dispatch = useDispatch();

  // const clickHandler = (e) => {

  // }

  return (
    <div
      className="card text-center"
      style={{ maxWidth: '550px', margin: '25px', display: 'flex' }}
    >

      <div
        className="card-body"
        style={{
          background: 'rgba 40, 41, 43, 0.3',
          backgroundImage: `url(${city.photo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '10rem 0 0',
          maxWidth: '50ch',
        }}
      >
        <small className="card-text">{`Общий рейтинг:${city.rating}/5`}</small>
        <p className="card-text">
          {city.name}
        </p>
        {/* <p className="card-text">
          {city.Cost.beer}
        </p>
        <p className="card-text">
          {city.Costs.petrol}
        </p> */}
        <p className="card-text">{`Население: ${city.population} человек`}</p>
        <small>{`Лучший район: ${city.best_nbh}`}</small>
        <br />
        <small style={{ color: 'blue' }}>{`Набирающий популярность район: ${city.upcoming_nbh}`}</small>
        <br />
        <a href={`${city.map_url}`}>Посмотреть на карте</a>
        <br />
        <a href={`${city.photo}`}>Районы/кварталы</a>
      </div>
    </div>
  );
}

export default CityCard;
