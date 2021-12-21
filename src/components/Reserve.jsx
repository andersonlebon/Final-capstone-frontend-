/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Select from 'react-select';
// import CustomSelect from 'custom-select-menu/custom-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../store/action/houseActions';

const Reserve = (props) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
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
      const { store } = props;
      const selectedHouse = store.housesReducer.houses.find((house) => house.id == input.value);
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
    console.log(state);
  };

  return (
    <section className="reservation">
      <div className="image-bg">
        <img src={state.currentHouse.image} alt={state.currentHouse.title} />
        <div className="img" />
      </div>
      <h2> BOOK A HOUSER</h2>
      <p className="description">
        {state.currentHouse.description}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
        facilis hic necessitatibus reprehenderit expedita eveniet, error quo,
        voluptates dolor tenetur ea praesentium aliquam mollitia et accusamus
        asperiores, esse exercitationem incidunt?
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <select
            name="currentHouse"
            onChange={(e) => handleChange(e)}
          >
            {store.housesReducer.houses.map((reservation) => (
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
        {/* <Select options={reservations} /> */}
        <button type="submit" className="btn btn-primary">
          Add Reservation
        </button>
      </form>
    </section>
  );
};

export default Reserve;
