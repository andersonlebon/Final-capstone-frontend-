import jwt from 'jwt-decode';
import user from '../../../api/user';

const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const initialState = { user: localStorage.getItem('token') ? jwt(localStorage.getItem('token')) : null };

export const authenticateUser = (username) => async (dispatch) => {
  user.authenticateUser(username).then((response) => {
    if (response.token) {
      localStorage.setItem('token', response.token);
      dispatch({
        type: AUTHENTICATE_USER,
        payload: jwt(localStorage.getItem('token')),
      });
    } else {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: null,
      });
      localStorage.removeItem('token');
    }
  });
};

export const registerUser = (username) => async (dispatch) => {
  user.registerUser(username).then((response) => {
    if (response.id) {
      (authenticateUser(username))(dispatch);
    }
  });
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT_USER,
    payload: null,
  });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state.user,
        user: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
