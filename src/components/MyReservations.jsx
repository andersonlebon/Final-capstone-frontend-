/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class MyReservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      duration: '',
      price: 0,
      startDate: new Date(),
    };
  }

  handleChange = ({ target: input }) => {
    const state = { ...this.state };
    state[input.name] = input.value;
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
  }

  render() {
    const { store: reservations } = this.props;
    return (
      <section className="reservation">
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
              name="selectedOption"
              onChange={(e) => this.handleChange(e)}
            >
              {reservations.map((reservation) => (
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
          <button type="submit" className="btn btn-primary">
            Add Reservation
          </button>
        </form>
      </section>
    );
  }
}

export default MyReservations;
