import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchHouses } from '../store/action/houseActions';
import { addReservation } from '../store/reducers/myReservations/index';
import reservationApi from '../api/reservations';

const Reserve = () => {
  const { housesReducer: store } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [state, setState] = useState({
    selectedOption: null,
    currentHouse: {},
    duration: '',
    price: 0,
    startDate: new Date(),
  });

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  const handleChange = ({ target: input }) => {
    const stateM = { ...state };
    if (input.name === 'currentHouse') {
      const selectedHouse = store.houses.find((house) => house.id === parseInt(input.value, 10));
      stateM[input.name] = selectedHouse;
      console.log(selectedHouse);
    } else {
      stateM[input.name] = input.value;
    }
    setState({ ...stateM });
  };

  const onChangeDate = (date) => {
    const stateM = { ...state };
    stateM.startDate = date;
    setState({ ...stateM });
    console.log(date.getDay());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      duration, price, currentHouse,
    } = state;
    const newReservation = {
      rent_duration: duration,
      rent_start_date: '2020-04-01',
      rent_total_price: price,
      house_ids: currentHouse.id,

    };
    console.log(newReservation);
    reservationApi(dispatch, addReservation, newReservation);
    history('/');
  };

  return (
    <section className="reservation">
      <div className="image-bg">
        <img src={state.currentHouse.image} alt={state.currentHouse.title} />
        <div className="img" />
      </div>
      <div className="form-bg">
        <h2>
          BOOK YOUR
          {` ${state.currentHouse.title}`}
        </h2>
        <p className="description">{state.currentHouse.house_description}</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <select name="currentHouse" onChange={(e) => handleChange(e)}>
              {store.houses.map((reservation) => (
                <option key={reservation.id} value={reservation.id}>
                  {reservation.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
              name="duration"
              placeholder="Duration"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              onChange={(e) => handleChange(e)}
              name="price"
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
