/* eslint-disable react/prop-types */
/* eslint-disable no-trailing-spaces */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../store/reducers/myReservations';
import reservationApi from '../api/reservations';

const Myreservations = () => {
  // render the store in table
  const dispatch = useDispatch();
  const { reservationsReducer } = useSelector((state) => state);
  useEffect(() => {
    dispatch(reservationApi, getReservations);
  }, []);
  return (
    <div>
      <h2>My Reservations</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {reservationsReducer.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.title}</td>
              <td>{reservation.duration}</td>
              <td>{reservation.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myreservations;
