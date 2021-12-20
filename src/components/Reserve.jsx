/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Select from 'react-select';
// import CustomSelect from 'custom-select-menu/custom-select';

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      currentHouse: {},
      duration: '',
      price: 0,
      startDate: new Date(),
    };
  }

  handleChange = ({ target: input }) => {
    const state = { ...this.state };
    if (input.name === 'currentHouse') {
      const { store } = this.props;
      const selectedHouse = store.housesReducer.houses.find((house) => house.id == input.value);
      state[input.name] = selectedHouse;
      console.log(selectedHouse);
    } else {
      state[input.name] = input.value;
    }
    this.setState(state);
  };

  onChangeDate = (date) => {
    const state = { ...this.state };
    state.startDate = date;
    this.setState(state);
    console.log(date.getDay());
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { store } = this.props;

    // const reservations = store.map((reservation) => (
    //   { value: reservation.id, label: reservation.title }  // eslint-disable-line
    // ));

    return (
      <section className="reservation">
        <div className="image-bg">
          <img src={this.state.currentHouse.image} alt={this.state.currentHouse.title} />
        </div>
        <h2> BOOK A HOUSER</h2>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          facilis hic necessitatibus reprehenderit expedita eveniet, error quo,
          voluptates dolor tenetur ea praesentium aliquam mollitia et accusamus
          asperiores, esse exercitationem incidunt?
        </p>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <select
              name="currentHouse"
              onChange={(e) => this.handleChange(e)}
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
              onChange={(e) => this.handleChange(e)}
              name="duration"
              placeholder="Duration"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              onChange={(e) => this.handleChange(e)}
              name="price"
              placeholder="Price"
            />
          </div>
          <DatePicker
            placeholder="form"
            selected={this.state.startDate}
            onChange={(date) => this.onChangeDate(date)}
          />
          {/* <Select options={reservations} /> */}
          <button type="submit" className="btn btn-primary">
            Add Reservation
          </button>
        </form>
      </section>
    );
  }
}

export default Reserve;
