import houses from '../../api/houses';
import ActionTypes from '../types/action-types';

export const receiveHouses = (houses) => ({
  type: ActionTypes.RECEIVE_HOUSES,
  houses,
});

export const fetchHouses = () => (dispatch) => {
  houses.fetchHouses().then((houses) => {
    dispatch(receiveHouses(houses));
    return houses;
  });
};

export const removeHouse = (id) => (dispatch) => {
  houses.removeHouse(id).then((response) => {
    dispatch(fetchHouses());
    return response;
  });
};

export const addHouse = (house) => (dispatch) => {
  houses.addHouse(house).then((response) => {
    if (response === 'Created') {
      dispatch(fetchHouses());
    }
    return response;
  });
};