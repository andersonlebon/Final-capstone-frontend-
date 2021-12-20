import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Houses from './components/displayHouses/Houses';
import MyReservations from './components/MyReservations';
import AddHouses from './components/AddHouses';
import RemoveHouses from './components/RemoveHouses';
import Reserve from './components/Reserve';
import ShowHouse from './components/showHouse/showHouse';

function App() {
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
            <Route path="/reserve" element={<Reserve />} />
          </Routes>
        </article>
      </section>
    </Router>
  );
}

export default App;
