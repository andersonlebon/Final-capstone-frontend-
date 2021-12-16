import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/users';
import housesReducer from './reducers/houses';
import reservationsReducer from './reducers/myReservations';

const reducer = combineReducers({
  userReducer,
  housesReducer,
  reservationsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;
