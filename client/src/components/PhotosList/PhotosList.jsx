import {
  Button, Modal, Box,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllPhotos } from '../../redux/actions/photoActions';
import PhotoCard from '../PhotoCard/PhotoCard';
import FormPhoto from '../FormPhoto/FormPhoto';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PhotosList() {
  const { id } = useParams();
  const photo = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  console.log('----> 1', photo);
  
  useEffect(() => {
    dispatch(fetchAllPhotos(id));
  }, []);

  // Modal logic
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container" style={{ display: 'flex' }}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormPhoto />
        </Box>
      </Modal>

      <div className="row">
        {photo && photo?.map((el) => (
          <PhotoCard key={el.id} photo={el} />
        ))}
      </div>
    </div>
  );
}
