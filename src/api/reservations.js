import baseApi from '../store/baseApi';

const resevationsBasedURL = 'api/v1/users/5/reservations';

const resevationsApi = async (dispatch, action, newData = null) => {
  try {
    if (newData != null) {
      await baseApi.post(`${resevationsBasedURL}`, newData);
      dispatch(action(newData));
    }

    if (!newData) {
      const { data } = await baseApi.get(resevationsBasedURL);
      dispatch(action(data));
    }
    // send delete request
  } catch ({ message }) {
    dispatch({ type: `${action.type}Fail`, payload: { error: message } });
  }
};

export default resevationsApi;
