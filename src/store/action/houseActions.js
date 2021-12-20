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

export const removeHouse = (userId, id) => (dispatch) => {
  houses.removeHouse(userId, id).then((response) => {
    dispatch(fetchHouses());
    return response;
  });
};

export const addHouse = (house) => (dispatch) => {
  houses.addHouse(house).then((response) => {
    if (response.id) {
      dispatch(fetchHouses());
    }
    return response;
  });
};
