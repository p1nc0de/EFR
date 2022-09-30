import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllCities from './components/AllCities';
import CityCard from './components/CityCard';
import MainPage from './components/MainPage/MainPage';
import NoPage from './components/NoPage/NoPage';

function App() {
  return (
    // <div style={{ width: '150px', height: '150px' }}>
    //   <iframe aria-disabled title="myFrame" data-src="https://hoodmaps.com/embed/moscow" src="https://hoodmaps.com/embed/moscow" />
    // </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/city" element={<AllCities />} />
      <Route path="/city/:id" element={<CityCard />} />
      <Route path="/*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
