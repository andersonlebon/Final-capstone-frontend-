import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionReducer from './mission/mission';

const reducer = combineReducers({
  rocketsReducer,
  missionReducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
