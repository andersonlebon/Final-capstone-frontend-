import axios from 'axios';
import { GET_HOUSES, HOUSES_ERROR } from '../types';

const BASE_URL = 'https://house-booking-api.herokuapp.com/api/v1/users/{user_id}/houses';

export const getHouses = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    dispatch({
      type: GET_HOUSES,
      // eslint-disable-next-line comma-dangle
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: HOUSES_ERROR,
      payload: console.log(error),
    });
  }
};

export default getHouses;
