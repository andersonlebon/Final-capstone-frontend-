import axios from 'axios';

const BASE_URL = 'https://house-booking-api.herokuapp.com/api/v1/users/{user_id}/houses';

const fetchHouses = async () => axios.get(`${BASE_URL}`).then((res) => {
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
  axios.delete(`${BASE_URL}/${houseId}`, config).then((response) => response);
};

const addHouse = async (house) => {
  const token = localStorage.fetchHouse('token');
  const config = {
    headers: {
      Authorisation: token,
    },
  };
  const body = {
    user_id: house.userId,
    title: house.title,
    house_description: house.house_description,
    image: house.image,
    price: house.price,
    availability: house.availability,
    discount: house.discount,
  };
  const result = axios
    .post(`${BASE_URL}`, body, config)
    .then((response) => response.data);

  return result;
};

export default { fetchHouses, addHouse, removeHouse };
