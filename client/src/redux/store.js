import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import cityReducer from './reducers/cityReducer';

export default configureStore({
  reducer: {
    city: cityReducer,
    authUser: authReducer,

  },
});
