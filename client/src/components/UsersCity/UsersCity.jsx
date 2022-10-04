import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Button,
  CardActions,
  // Modal,
  // Box,
} from '@mui/material';
import { getAllUsers } from '../../redux/actions/userActions';
// import UserPage from '../UserPage/UserPage';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   borderRadius: '10%',
//   boxShadow: 24,
//   p: 4,
// };

export default function UsersCity() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  // const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getAllUsers(id));
  }, []);

  return (
    <div className="row d-flex">
      <h3>Уже живут там</h3>
      {users && users?.map((user) => (
        <div className="col-md-2">
          {user?.avatar?.includes('http')
            ? (
              <Avatar
                alt="Remy Sharp"
                src={user?.avatar}
                sx={{ width: 100, height: 100 }}
              />
            )
            : (
              <Avatar
                alt="Remy Sharp"
                src={`http://localhost:3001/photos/${user?.avatar}`}
                sx={{ width: 100, height: 100 }}
              />
            )}
          <CardActions>
            <Button component={NavLink} to={`/users/${user?.id}`} variant="contained" color="grey" size="sm" sx={{ textDecoration: 'none' }}>
              {user?.login}
            </Button>

          </CardActions>
          {' '}
          {' '}

          {/* <Modal
            open={open}
            setOpen={setOpen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <UserPage />
            </Box>
          </Modal> */}
        </div>
      ))}
    </div>

  );
}
