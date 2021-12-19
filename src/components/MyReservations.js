/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

class MyReservations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

    handleChange = (e) => {
      this.setState({ selectedOption: e.target.value });
      const { selectedOption } = this.state;
      const { store } = this.props;
      console.log(selectedOption, store);
    }

    render() {
      const reservations = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

      return (
        <form>
          <div className="form-group">
            <select name="reservation" id="reservation" onChange={(e) => this.handleChange(e)}>
              {reservations.map((reservation) => (
                <option key={reservation} value={reservation}>
                  {reservation}
                </option>
              ))}
            </select>
          </div>
        </form>
      );
    }
}

export default MyReservations;
