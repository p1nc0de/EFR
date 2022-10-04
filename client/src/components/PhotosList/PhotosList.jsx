import {
  Button, Modal, Box, ImageListItemBar,
} from '@mui/material';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllPhotos } from '../../redux/actions/photoActions';
import FormPhoto from '../FormPhoto';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10%',
  boxShadow: 24,
  p: 4,
};

export default function MasonryImageList() {
  const { id } = useParams();
  const photo = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  console.log('----> 1', photo);

  React.useEffect(() => {
    dispatch(fetchAllPhotos(id));
  }, []);

  // Modal logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <div className="row">
        {photo && photo?.map((el) => (
          <PhotoCard key={el.id} photo={el} /> */}
      <Button onClick={handleOpen}> 📷 Добавить фотографию </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormPhoto setOpen={setOpen} />
        </Box>
      </Modal>

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
