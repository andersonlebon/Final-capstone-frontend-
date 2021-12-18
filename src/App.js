import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Houses from './components/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses';
import RemoveHouses from './components/RemoveHouses';
import Reserve from './components/Reserve';
import { housesApi, addHouse } from './store2/houses/houses';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    housesApi(dispatch, addHouse, {
      title: 'My house',
      house_description: 'VIP',
      location: 'KIGALI',
      image: 'HTTPs/imageusrl',
      price: 20,
      availability: 10,
      discount: '20.0',
      user_id: 6,
    });
  }, []);

  return (
    <Router>
      <section className="container">
        <Navbar />
        <article className="main">
          <Routes>
            <Route path="/" element={<Houses />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/addhouse" element={<AddHouses />} />
            <Route path="/removehouse" element={<RemoveHouses />} />
            <Route path="/reserve" element={<Reserve />} />
          </Routes>
        </article>
      </section>
    </Router>
  );
}

export default App;
