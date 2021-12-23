import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations, removeReservation } from '../../store/reducers/myReservations';
import reservationApi, { deleteReservation } from '../../api/reservations';
import { fetchHouses } from '../../store/action/houseActions';

const Myreservations = () => {
  const dispatch = useDispatch();
  const { reservationsReducer, userReducer, housesReducer } = useSelector(
    (state) => state,
  );

  useEffect(() => {
    dispatch(fetchHouses());
    const { user_id: id } = userReducer.user;
    reservationApi(dispatch, getReservations, id);
  }, []);

  const handleDelete = (rerveId) => {
    const { user_id: id } = userReducer.user;
    deleteReservation(dispatch, removeReservation, id, rerveId);
  };

  const getHouse = (houseId) => housesReducer.houses.find((house) => house.id === houseId) || {};
  const filteredReservations = reservationsReducer.filter((reservation) => typeof reservation.house === 'number');
  console.log(filteredReservations);

  return (
    <section className="my-reservation-container">
      <h2>My Reservations</h2>
      <ul className="allReserved">
        {filteredReservations.map((reservation) => (
          <li key={reservation.id} className="reserved-card">
            <div className="reserved-img">
              <img
                src={getHouse(reservation.house).image || null}
                alt="reservation"
              />
              <div className="reserved-img-color" />
            </div>
            <div className="reservation-info">
              <h3 className="title">
                {getHouse(reservation.house).title || null}
              </h3>
              <p>{getHouse(reservation.house).house_description}</p>
              <ul className="reserved-info-list">
                <li>
                  <span>Rent duration: </span>
                  {reservation.rent_duration}
                </li>
                <li>
                  <span>Location city: </span>
                  {getHouse(reservation.house).location}
                </li>
                <li>
                  <span>Start day: </span>
                  {reservation.rent_start_date}
                </li>
                <li>
                  <span>Total price: </span>
                  {getHouse(reservation.house).price
                    * reservation.rent_duration
                    - (getHouse(reservation.house).price
                      * reservation.rent_duration
                      * getHouse(reservation.house).discount)
                      / 100}
                </li>
              </ul>
              <button
                type="button"
                onClick={() => handleDelete(reservation.id)}
              >
                Cancel Reservation
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Myreservations;
