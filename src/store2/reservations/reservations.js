/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const reservationsReducer = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
  },

  reducers: {
    addReservation(state, action) {
      state.reservations.push(action.payload);
    },
    removeReservation(state, action) {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload.id
      );
    },
  },
});

export const { addReservation, removeReservation } = reservationsReducer.actions;
export default reservationsReducer.reducer;
