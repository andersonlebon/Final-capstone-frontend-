import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/layout/Navbar';
import Houses from './components/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses';
import RemoveHouses from './components/RemoveHouses';
import Reserve from './components/Reserve';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Router>
      <section className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {user && <Navbar />}
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
