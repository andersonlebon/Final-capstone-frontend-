/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const reservationsReducer = createSlice({
  name: 'RESERVATIONS',
  initialState: [],

  reducers: {
    RECIEVED(state, action) {
      return action.payload;
    },
    ADDED(state, action) {
      state.push(action.payload);
    },
    REMOVED(state, action) {
      return state.filter(
        (reservation) => reservation.id !== parseInt(action.payload, 10),
      );
    },
  },
});

export const {
  ADDED: addReservation,
  REMOVED: removeReservation,
  RECIEVED: getReservations,
} = reservationsReducer.actions;
export default reservationsReducer.reducer;
