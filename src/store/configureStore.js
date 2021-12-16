import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducers/users';

const reducer = combineReducers({
  userReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export default store;
