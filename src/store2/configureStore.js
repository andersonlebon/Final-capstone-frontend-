import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { housesReducer } from './houses/houses';
import { reservationsReducer } from './reservations/reservations';

const reducer = combineReducers({
  houses: housesReducer,
  reservations: reservationsReducer,
});

export default configureStore({
  reducer,
});
