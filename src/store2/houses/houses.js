/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const housesBasedURL = 'https://house-booking-api.herokuapp.com/api/v1/users/1/houses';

export const housesApi = async (dispatch, action, newData = null) => {
  try {
    if (newData == null) {
      const { data } = await axios.get(housesBasedURL);
      dispatch(action(data));
    }
    if (newData != null) {
      const { data } = await axios.post(housesBasedURL, newData);
      dispatch(action(data));
    }
  } catch ({ message }) {
    dispatch({ type: 'housesFail', payload: { error: message } });
  }
};

export const housesReducer = createSlice({
  name: 'houses',
  initialState: [],
  reducers: {
    getHouses(state, action) {
      state = [...action.payload];
      return state;
    },
    addHouse(state, action) {
      state.push(action.payload);
    },
    removeHouse(state, action) {
      return state.filter((house) => house.id !== action.payload.id);
    },
  },
});

export const { getHouses, addHouse, removeHouse } = housesReducer.actions;
export default housesReducer.reducer;
