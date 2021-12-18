/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const housesReducer = createSlice({
  name: 'houses',
  initialState: {
    houses: [],
  },
  reducers: {
    addHouse(state, action) {
      state.houses.push(action.payload);
    },
    removeHouse(state, action) {
      state.houses = state.houses.filter(
        (house) => house.id !== action.payload.id,
      );
    },
  },
});

export const { addHouse, removeHouse } = housesReducer.actions;
export default housesReducer.reducer;
