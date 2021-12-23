/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchHouses } from '../../store/action/houseActions';
import { addReservation } from '../../store/reducers/myReservations/index';
import reservationApi from '../../api/reservations';

const defaultImage = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80';

const Reserve = (props) => {
  const { housesReducer: store, userReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { houseId } = useParams();

  const [state, setState] = useState({
    selectedOption: null,
    currentHouse: {},
    duration: '',
    price: 0,
    startDate: new Date(),
  });

  useEffect(() => {
    dispatch(fetchHouses());
    if (houseId !== 'new') {
      const stateM = { ...state };
      const { store: store2 } = props;
      const selectedHouse = store2.houses.find(
        (house) => house.id === parseInt(houseId, 10),
      );
      stateM.currentHouse = selectedHouse || {};
      stateM.price = selectedHouse.price;
      setState({ ...stateM });
    }
  }, []);

  const handleChange = ({ target: input }) => {
    const stateM = { ...state };
    if (input.name === 'currentHouse') {
      const selectedHouse = store.houses.find(
        (house) => house.id === parseInt(input.value, 10),
      );
      stateM[input.name] = selectedHouse;
    } else {
      stateM[input.name] = input.value;
    }
    setState({ ...stateM });
  };

  const onChangeDate = (date) => {
    const stateM = { ...state };
    stateM.startDate = date;
    setState({ ...stateM });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { duration, price, currentHouse } = state;
    const newReservation = {
      rent_duration: duration,
      rent_start_date: '2020-04-01',
      rent_total_price: price,
      house_ids: currentHouse.id,
    };
    const { user_id: id } = userReducer.user;
    reservationApi(dispatch, addReservation, id, newReservation);
    history('/myreservations');
  };
  const check = (id) => {
    const { currentHouse } = state;
    return currentHouse.id === id;
  };

  return (
    <section className="reservation">
      <div className="image-bg">
        <img
          src={state.currentHouse.image || defaultImage}
          alt={state.currentHouse.title}
        />
        <div className="img" />
      </div>
      <div className="form-bg">
        <h2>
          BOOK YOUR
          {` ${state.currentHouse.title || 'HOUSE'}`}
        </h2>
        <p className="description">{state.currentHouse.house_description}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <select name="currentHouse" onChange={(e) => handleChange(e)}>
              {store.houses.map((reservation) => (
                <option
                  selected={check(reservation.id)}
                  key={reservation.id}
                  value={reservation.id}
                >
                  {reservation.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={(e) => handleChange(e)}
              name="duration"
              type="number"
              min="1"
              placeholder="Duration"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              onChange={(e) => handleChange(e)}
              name="price"
              min="1"
              value={state.price}
              placeholder="Price"
            />
          </div>
          <DatePicker
            placeholder="form"
            selected={state.startDate}
            onChange={(date) => onChangeDate(date)}
          />
          <div className="btn">
            <button type="submit" className="btn btn-primary">
              Add Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reserve;
