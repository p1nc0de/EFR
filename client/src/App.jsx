import React, { useEffect } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import AllCities from './components/AllCities';
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
  }, []);

  return (
    // <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/city" element={<AllCities />} /> */}
      <Route path="/:id/scores" element={<Scores />} />
      <Route path="/:id/cost" element={<CostOfLiving />} />
      <Route path="/:id/reviews" element={<ReviewsPage />} />
      <Route path="/:id" element={<CountryPage />} />
      <Route path="/:id/photos" element={<PhotosList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users" element={<UsersCity />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    // </ThemeProvider>
  );
}

export default App;
