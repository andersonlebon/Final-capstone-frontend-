import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './sass/main.scss';
// import Navbar from './components/layout/Navbar';
import Houses from './components/displayHouses/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses/AddHouses';
import RemoveHouses from './components/RemoveHouses/RemoveHouses';
import Reserve from './components/Reserve';
import Login from './components/Login';
import Signup from './components/Signup';
import ShowHouse from './components/showHouse/showHouse';
import resevationsApi from './api/reservations';
import { getReservations } from './store/reducers/myReservations/index';
import Navigation from './NavPages';

function App() {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    resevationsApi(dispatch, getReservations);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {user ? (
        <section className="container">
          <Navigation />
          <article className="main">
            <Routes>
              <Route path="/" element={<Houses />} />
              <Route path="/showHouse/:houseTitle" element={<ShowHouse />} />
              <Route path="/myreservations" element={<MyReservations />} />
              <Route path="/addhouse" element={<AddHouses />} />
              <Route path="/removehouse" element={<RemoveHouses />} />
              <Route path="/reserve/:houseId" element={<Reserve />} />
            </Routes>
          </article>
        </section>
      ) : <Login /> }
    </Router>
  );
}

export default App;
