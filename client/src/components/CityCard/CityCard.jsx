import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

function CityCard({ city }) {
  // const dispatch = useDispatch();

  return (
    <div
      className="card text-center"
      style={{ maxWidth: '550px', margin: '25px', display: 'flex' }}
    >
      <img src={city.photo} alt={`${city.name}`} />
      <div className="card-body">
        <small className="card-text">{`Общий рейтинг:${city.rating}/5`}</small>
        <p className="card-text">
          {city.name}
        </p>
        <p className="card-text">{`Население: ${city.population} человек`}</p>
        <small>{`Лучший район: ${city.best_nbh}`}</small>
        <br />
        <small style={{ color: 'blue' }}>{`Набирающий популярность район: ${city.upcoming_nbh}`}</small>
        <br />
        <a href={`${city.map_url}`}>Посмотреть на карте</a>
        <br />
        <a href={`${city.nbhs_map}`}>Районы/кварталы</a>
      </div>
    </div>
  );
}

export default CityCard;
