import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    city: cityReducer,
    authUser: authReducer,
    user: userReducer,

  },
});
