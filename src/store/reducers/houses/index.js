import { RECEIVE_HOUSES, ADD_HOUSE } from '../../types';

const initialState = { houses: [] };

export const addHouse = (payload) => ({
  type: ADD_HOUSE,
  payload,
});

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOUSE: {
      const houses = [...state.houses, action.payload];
      return { ...state, houses };
    }
    case RECEIVE_HOUSES: {
      const { houses } = action;
      return { houses };
    }
    default:
      return state;
  }
};

export default housesReducer;
