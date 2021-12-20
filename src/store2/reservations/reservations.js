/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const resevationsBasedURL = 'https://house-booking-api.herokuapp.com/api/v1/users/1/reservations';

export const resevationsApi = async (dispatch, action, newData = null) => {
  try {
    // if (newData.method === 'delete') {
    //   await axios.delete(`${resevationsBasedURL}/${newData.id}`);
    //   dispatch(action(newData.id));
    // }
    if (newData != null) {
      await axios.post(`${resevationsBasedURL}`, newData);
      dispatch(action(newData));
    }

    if (!newData) {
      const { data } = await axios.get(resevationsBasedURL);
      dispatch(action(data));
    }
    // send delete request
  } catch ({ message }) {
    dispatch({ type: `${action.type}Fail`, payload: { error: message } });
  }
};

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
