import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducer';
import authReducer from './reducers/authReducer';

export default configureStore({
  reducer: {
    city: cityReducer,
    authUser: authReducer,

  },
});
