import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllCities from './components/AllCities';
// import CityCard from './components/CityCard';
import NoPage from './components/NoPage/NoPage';
import { fetchAllCities } from './redux/actions/cityActions';
// import Scores from './components/Scores';

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
      <Route path="/city" element={<AllCities />} />
      {/* <Route path="/city/:id" element={<Scores />} /> */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
