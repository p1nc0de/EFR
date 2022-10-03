import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, ImageListItemBar } from '@mui/material';
import { fetchAllPhotos } from '../../redux/actions/photoActions';

export default function MasonryImageList() {
  const { id } = useParams();
  const photo = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllPhotos(id));
  }, []);
  return (
    <>

      <Button type="button">Тут должна быть кнопка с модалкой</Button>

      <ImageList sx={{ width: 2000 }}>
        {photo?.map((el) => (
          <ImageListItem key={el.img}>
            {el.photo.includes('http')
              ? (
                <img
                  src={`${el.photo}?w=248&fit=crop&auto=format`}
                  srcSet={`${el.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={el.description}
                  loading="lazy"
                />

              )
              : (
                <img
                  src={`http://localhost:3001/photos/${el.photo}?w=248&fit=crop&auto=format`}
                  srcSet={`${el.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={el.description}
                  loading="lazy"
                />
              )}
            <ImageListItemBar
              title={el.description}
              subtitle={(
                <a href="/userpage">
                  by:
                  {' '}
                  {el.User?.login}
                </a>
)}
              position="below"
            />

          </ImageListItem>

        ))}
      </ImageList>

    </>
  );
}
