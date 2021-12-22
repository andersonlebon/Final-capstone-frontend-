import baseApi from '../store/baseApi';

const resevationsBasedURL = 'api/v1/users/1/reservations';

const resevationsApi = async (dispatch, action, newData = null) => {
  try {
    if (newData != null) {
      const { data } = await baseApi.post(`${resevationsBasedURL}`, newData);
      dispatch(action(data));
    }

    if (!newData) {
      const { data } = await baseApi.get(resevationsBasedURL);
      dispatch(action(data));
    }
  } catch (e) {
    dispatch({ type: `${action.type}Fail`, payload: { error: e.message } });
  }
};

export const deleteReservation = async (dispatch, action, id) => {
  try {
    await baseApi.delete(`${resevationsBasedURL}/${id}`);
    dispatch(action(id));
  } catch (e) {
    console.log(e);
    dispatch({ type: `${action.type}Fail`, payload: { error: e.message } });
  }
};

export default resevationsApi;
