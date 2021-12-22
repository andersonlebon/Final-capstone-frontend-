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
      state.push(action.payload);
    },
    removeReservation(state, action) {
      return state.filter(
        (reservation) => reservation.id !== parseInt(action.payload, 10),
      );
    },
  },
});

export const { addReservation, removeReservation, getReservations } = reservationsReducer.actions;
export default reservationsReducer.reducer;
