import React, { useEffect } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NoPage from './components/NoPage/NoPage';
import PhotosList from './components/PhotosList';
import { fetchAllCities } from './redux/actions/cityActions';
import Scores from './components/Scores';
import CostOfLiving from './components/CostOfLiving';
import CountryPage from './components/CountryPage';
import Login from './components/Login';
import UserPage from './components/UserPage';
import ReviewsPage from './components/Reviews/ReviewsPage';
import UsersCity from './components/UsersCity';
import Signup from './components/Signup';
import { checkAuthAsync } from './redux/actions/authActions';
import Hoodmaps from './components/Hoodmaps';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#696969'
//     }
//   }
// });

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
    dispatch(checkAuthAsync());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id/scores" element={<Scores />} />
      <Route path="/:id/cost" element={<CostOfLiving />} />
      <Route path="/:id/reviews" element={<ReviewsPage />} />
      <Route path="/:id/users" element={<UsersCity />} />
      <Route path="/:id" element={<CountryPage />} />
      <Route path="/:id/photos" element={<PhotosList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users" element={<UsersCity />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="/:id/hoodmap" element={<Hoodmaps />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
