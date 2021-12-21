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
    <section className="my-reservation-container">
      <h2>My Reservations</h2>
      <ul className="allReserved">
        {reservationsReducer.map((reservation) => (
          <li key={reservation.id} className="reserved-card">
            <div className="reserved-img">
              <img src={reservation.house.image} alt="reservation" />
              <div className="reserved-img-color" />
            </div>
            <div className="reservation-info">
              <h3 className="title">{reservation.house.title}</h3>
              <p>{reservation.house.house_description}</p>
              <ul className="reserved-info-list">
                <li>
                  <span>Rent duration: </span>
                  {reservation.rent_duration}
                </li>
                <li>
                  <span>Location city: </span>
                  {reservation.house.location}
                </li>
                <li>
                  <span>Start day: </span>
                  {reservation.rent_start_date}
                </li>
                <li>
                  <span>Total price: </span>
                  {reservation.rent_duration
                      * parseInt(reservation.house.price, 10)}
                </li>
              </ul>
              <button type="button">Cancel Reservation </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Myreservations;
