/* eslint-disable react/prop-types */
/* eslint-disable no-trailing-spaces */
import React from 'react';

const Myreservations = ({ store }) => ( 
  // render the store in table
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
        {store.map((reservation) => (
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
 
export default Myreservations;
