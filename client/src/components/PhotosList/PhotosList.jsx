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
import PhotoCard from '../Reviews/PhotoCard';
import CityNavbar from '../UI/CityNavbar';
import { fetchOneCity } from '../../redux/actions/oneCityActions';

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

  // Modal logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    dispatch(fetchOneCity(id))
    dispatch(fetchAllPhotos(id));
  }, [open]);

  return (
    <Box sx={{ bgcolor: '#101010' }}>
      <PhotoCard />
      <CityNavbar />
      {/* <div className="row">
        {photo && photo?.map((el) => (
          <PhotoCard key={el.id} photo={el} /> */}
      {/* <Button onClick={handleOpen}> 📷 Добавить фотографию </Button> */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: 10, marginBottom: 1 }}>
        <Button
          onClick={handleOpen}
          variant="contained"
          size="lagre"
          // color="danger"
          sx={{
            textDecoration: 'none', backgroundColor: 'red', color: 'black', '&:hover': { backgroundColor: 'black', color: 'red' },
            // textDecoration: 'none', color: 'darkviolet', '&:hover': { backgroundColor: 'red', color: 'black' },
          }}
        >
          Добавить фотографию
        </Button>
      </Box>
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

      <ImageList
        cols={3}
        sx={{
          marginLeft: '20px',
          width: '100% ',
        }}
      >
        {photo?.map((el) => (
          <ImageListItem
            sx={{
              width: '600px',
            }}
            key={el.img}
          >
            {el.photo.includes('http')
              ? (
                <img
                  style={{ border: 'solid 3px #db840880' }}
                  src={`${el.photo}?w=248&fit=crop&auto=format`}
                  srcSet={`${el.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={el.description}
                  loading="lazy"
                />

              )
              : (
                <img
                  style={{ border: 'solid 3px #db840880' }}
                  src={`http://localhost:3001/photos/${el.photo}?w=248&fit=crop&auto=format`}
                  srcSet={`${el.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={el.description}
                  loading="lazy"
                />
              )}
            <ImageListItemBar
              sx={{ color: 'white' }}
              title={el.description}
              subtitle={(
                <a href={`/users/${el?.User?.id}`}>
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

    </Box>
  );
}
