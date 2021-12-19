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
      console.log(selectedOption);
    }

    render() {
      const { store: reservations } = this.props;
      return (
        <form>
          <div className="form-group">
            <select name="reservation" id="reservation" onChange={(e) => this.handleChange(e)}>
              {reservations.map((reservation) => (
                <option key={reservation.id} value={reservation.id}>
                  {reservation.title}
                </option>
              ))}
            </select>
          </div>
        </form>
      );
    }
}

export default MyReservations;
