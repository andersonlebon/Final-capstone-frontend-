/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './sass/main.css';
// import Navbar from './components/layout/Navbar';
import Houses from './components/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses';
import RemoveHouses from './components/RemoveHouses';
import Reserve from './components/Reserve';
import { resevationsApi, getReservations } from './store2/reservations/reservations';
import { housesApi, getHouses } from './store2/houses/houses';

function App() {
  const dispatch = useDispatch();
  const { houseReducer: houseStore, reservationReducer } = useSelector((state) => state);
  useEffect(() => {
    housesApi(dispatch, getHouses);
    resevationsApi(dispatch, getReservations);
  }, []);

  return (
    <Router>
      {/* <section className="container"> */}
      {/* <Navbar /> */}
      <article className="main">
        <Routes>
          <Route path="/" element={<Houses />} />
          <Route
            path="/myreservations"
            element={<MyReservations store={reservationReducer} />}
          />
          <Route path="/addhouse" element={<AddHouses />} />
          <Route path="/removehouse" element={<RemoveHouses />} />
          <Route path="/reserve" element={<Reserve store={houseStore} />} />
        </Routes>
      </article>
      {/* </section> */}
    </Router>
  );
}

export default App;
