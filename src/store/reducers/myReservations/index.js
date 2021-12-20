/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const reservationsReducer = createSlice({
  name: 'reservation',
  initialState: [],

  reducers: {
    getReservations(state, action) {
      return [...action.payload];
    },
    addReservation(state, action) {
      state.reservations.push(action.payload);
    },
    removeReservation(state, action) {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload.id,
      );
    },
  },
});

export const { addReservation, removeReservation, getReservations } = reservationsReducer.actions;
export default reservationsReducer.reducer;
