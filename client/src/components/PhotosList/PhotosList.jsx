import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllPhotos } from '../../redux/actions/photoActions';
import PhotoCard from '../PhotoCard/PhotoCard';

export default function PhotosList() {
  const { id } = useParams();
  const photo = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  console.log('----> 1', photo);
  useEffect(() => {
    dispatch(fetchAllPhotos(id));
  }, []);
  return (
    <div className="container" style={{ display: 'flex' }}>
      <span>
        <button type="button">Тут должна быть кнопка с модалкой</button>
      </span>
      <div className="row">
        {photo && photo?.map((el) => (
          <PhotoCard key={el.id} photo={el} />
        ))}
      </div>
    </div>
  );
}
