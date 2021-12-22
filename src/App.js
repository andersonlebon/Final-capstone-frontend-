import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Houses from './components/displayHouses/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses/AddHouses';
import RemoveHouses from './components/RemoveHouses/RemoveHouses';
import Reserve from './components/Reserve';
import Login from './components/Login';
import Signup from './components/Signup';
import ShowHouse from './components/showHouse/showHouse';
import Navigation from './NavPages';

function App() {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {user && (
      <section className="container">
        <Navigation />
        <article className="main">
          <Routes>
            <Route path="/" element={<Houses />} />
            <Route path="/showHouse/:houseTitle" element={<ShowHouse />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/addhouse" element={<AddHouses />} />
            <Route path="/removehouse" element={<RemoveHouses />} />
            <Route path="/reserve" element={<Reserve />} />
          </Routes>
        </article>
      </section>
      )}
    </Router>
  );
}

export default App;
