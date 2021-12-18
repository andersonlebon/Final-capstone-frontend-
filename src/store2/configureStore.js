import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import houseReducer from './houses/houses';
import reservationReducer from './reservations/reservations';

const reducer = combineReducers({
  houseReducer,
  reservationReducer,
});

export default configureStore({
  reducer,
});
