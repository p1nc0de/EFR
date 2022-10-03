import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/cityReducer';
import authReducer from './reducers/authReducer';
import photoReducer from './reducers/photoReducer';
import userReducer from './reducers/userReducer';
import reviewReducer from './reducers/reviewReducer';
import oneCityReducer from './reducers/oneCityReducer';

export default configureStore({
  reducer: {
    city: cityReducer,
    oneCity: oneCityReducer,
    authUser: authReducer,
    photo: photoReducer,
    user: userReducer,
    review: reviewReducer,
  },
});
