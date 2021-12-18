/* eslint-disable no-param-reassign */
import { slice } from '@reduxjs/toolkit';

export const resrvationslice = slice({
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
        (reservation) => reservation.id !== action.payload.id,
      );
    },
  },
});

export const { addReservation, removeReservation } = resrvationslice.actions;
