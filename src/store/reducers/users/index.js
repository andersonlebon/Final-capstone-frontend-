import jwt from 'jwt-decode';

const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const initialState = { user: localStorage.getItem('token') ? jwt(localStorage.getItem('token')) : null };
const baseURL = 'http://localhost:4000/api/v1';
// const baseURL = 'https://house-booking-api.herokuapp.com/api/v1';

export const authenticateUser = (username) => async (dispatch) => {
  const fetched = await fetch(`${baseURL}/sessions`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name: username }),
  });

  if (fetched.status === 201) {
    const user = await fetched.json();
    localStorage.setItem('token', user.token);
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
};

export const registerUser = (username) => async (dispatch) => {
  const fetched = await fetch(`${baseURL}/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name: username }),
  });

  if (fetched.statusText === 'Created') {
    await (authenticateUser(username))(dispatch);
  }
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
