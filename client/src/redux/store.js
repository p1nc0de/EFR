import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducer';
import authReducer from './reducers/authReducer';
import photoReducer from './reducers/photoReducer';

export default configureStore({
  reducer: {
    city: cityReducer,
    authUser: authReducer,
    photo: photoReducer,

  },
});
