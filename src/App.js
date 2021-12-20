/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './sass/main.scss';
import Navbar from './components/layout/Navbar';
import Houses from './components/displayHouses/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses';
import RemoveHouses from './components/RemoveHouses';
import Reserve from './components/Reserve';
import ShowHouse from './components/showHouse/showHouse';
import resevationsApi from './api/reservations';
import { getReservations } from './store/reducers/myReservations/index';

function App() {
  const dispatch = useDispatch();
  const { reservationsReducer: store } = useSelector((state) => state);
  useEffect(() => {
    resevationsApi(dispatch, getReservations);
  }, []);

  return (
    <Router>
      <section className="container">
        <Navbar />
        <article className="main">
          <Routes>
            <Route path="/" element={<Houses />} />
            <Route path="/showHouse/:houseTitle" element={<ShowHouse />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/addhouse" element={<AddHouses />} />
            <Route path="/removehouse" element={<RemoveHouses />} />
            <Route path="/reserve" exact element={<Reserve store={store} />} />
          </Routes>
        </article>
      </section>
    </Router>
  );
}

export default App;
