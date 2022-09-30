import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCities from './components/AllCities';
import CityCard from './components/CityCard';
import FormPhoto from './components/FormPhoto/FormPhoto';
import Login from './components/Login';
import MainPage from './components/MainPage/MainPage';
import NoPage from './components/NoPage/NoPage';
import Signup from './components/Signup';

function App() {
  return (
    // <div style={{ width: '150px', height: '150px' }}>
    //   <iframe aria-disabled title="myFrame" data-src="https://hoodmaps.com/embed/moscow" src="https://hoodmaps.com/embed/moscow" />
    // </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/city" element={<AllCities />} />
      <Route path="/city/:id" element={<CityCard />} />

      <Route path="/city/:id/photos" element={<FormPhoto />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NoPage />} />

    </Routes>
  );
}

export default App;
