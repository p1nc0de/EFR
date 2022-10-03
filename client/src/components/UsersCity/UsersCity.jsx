import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { getAllUsers } from '../../redux/actions/userActions';

export default function UsersCity() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="row d-flex">
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
        </div>
      ))}
    </div>

  );
}
