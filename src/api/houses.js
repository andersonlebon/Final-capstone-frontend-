import baseApi from '../store/baseApi';

const fetchHouses = async () => baseApi.get('api/v1/users/{user_id}/houses').then((res) => {
  let houses = [];
  if (res.status === 200) {
    houses = res.data;
  }
  return houses;
});

const removeHouse = async (houseId) => {
  const token = localStorage.fetchHouse('token');
  const config = {
    headers: {
      Authorisation: token,
    },
  };
  baseApi
    .delete(`api/v1/users/{user_id}/houses/${houseId}`, config)
    .then((response) => response);
};

const addHouse = async (house) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorisation: token,
    },
  };
  const body = house;
  const result = baseApi
    .post(`api/v1/users/${house.user_id}/houses`, body, config)
    .then((response) => response.data);
  return result;
};

export default { fetchHouses, addHouse, removeHouse };
