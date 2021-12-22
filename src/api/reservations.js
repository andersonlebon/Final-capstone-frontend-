import baseApi from '../store/baseApi';

const resevationsBasedURL = 'api/v1/users/1/reservations';

const resevationsApi = async (dispatch, action, newData = null) => {
  try {
    if (newData != null) {
      const { data } = await baseApi.post(`${resevationsBasedURL}`, newData);
      console.log(data);
      dispatch(action(data));
    }

    if (!newData) {
      const { data } = await baseApi.get(resevationsBasedURL);
      dispatch(action(data));
    }
    // send delete request
  } catch (e) {
    console.log(e);
    dispatch({ type: `${action.type}Fail`, payload: { error: e.message } });
  }
};

export default resevationsApi;
