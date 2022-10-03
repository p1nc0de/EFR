import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllCities from './components/AllCities';
import MainPage from './components/MainPage/MainPage';
import NoPage from './components/NoPage/NoPage';
import PhotosList from './components/PhotosList';
import { fetchAllCities } from './redux/actions/cityActions';
import Scores from './components/Scores';
import CostOfLiving from './components/CostOfLiving';
import CountryPage from './components/CountryPage';
import Login from './components/Login';
import Signup from './components/Signup';
import UserPage from './components/UserPage';
import ReviewsPage from './components/Reviews/ReviewsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

  return (
    // <div style={{ width: '150px', height: '150px' }}>
    //   <iframe aria-disabled title="myFrame" data-src="https://hoodmaps.com/embed/moscow" src="https://hoodmaps.com/embed/moscow" />
    // </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/city" element={<AllCities />} />
      <Route path="/city/:id/scores" element={<Scores />} />
      <Route path="/city/:id/cost" element={<CostOfLiving />} />
      <Route path="/city/:id/reviews" element={<ReviewsPage />} />
      <Route path="/city/:id" element={<CountryPage />} />
      <Route path="/city/:id/photos" element={<PhotosList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="*" element={<NoPage />} />

    </Routes>
  );
}

export default App;
