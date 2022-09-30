import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchOneCity } from '../../redux/actions/cityActions';

function Scores() {
  const { id } = useParams();
  const onceCity = useSelector((s) => s.city)
    .find((el) => el.id === id);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchOneCity(id));
  // }, []);

  return (
    <div>
      Scores
    </div>
  );
}

export default Scores;
