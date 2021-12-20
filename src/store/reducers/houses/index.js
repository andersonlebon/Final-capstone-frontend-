import ActionTypes from '../../types/action-types';

const initialState = { houses: [] };

export const addHouse = (payload) => ({
  type: ActionTypes.ADD_HOUSE,
  payload,
});

const housesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_HOUSE: {
      const houses = [...state.houses, action.payload];
      return { ...state, houses };
    }
    case ActionTypes.RECEIVE_HOUSES: {
      const { houses } = action;
      return { houses };
    }
    default:
      return state;
  }
};

export default housesReducer;
