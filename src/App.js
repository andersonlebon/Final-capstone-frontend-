import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Houses from './components/displayHouses/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses';
import RemoveHouses from './components/RemoveHouses';
import Reserve from './components/Reserve';

function App() {
  return (
    <section className="container">
      <Router>
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
      </Router>
    </section>
  );
}

export default App;
