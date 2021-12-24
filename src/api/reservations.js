import baseApi from '../store/baseApi';

const resevationsBasedURL = 'api/v1/users';

const resevationsApi = async (dispatch, action, id, newData = null) => {
  try {
    if (newData != null) {
      const { data } = await baseApi.post(`${resevationsBasedURL}/${id}}/reservations`, newData);
      dispatch(action(data));
    }

    if (!newData) {
      const { data } = await baseApi.get(`${resevationsBasedURL}/${id}}/reservations`);
      dispatch(action(data));
    }
  } catch (e) {
    dispatch({ type: `${action.type}Fail`, payload: { error: e.message } });
  }
};

export const deleteReservation = async (dispatch, action, id, reserId) => {
  try {
    await baseApi.delete(`${resevationsBasedURL}/${id}}/reservations/${reserId}`);
    dispatch(action(reserId));
  } catch (e) {
    dispatch({ type: `${action.type}Fail`, payload: { error: e.message } });
  }
};

export default resevationsApi;
