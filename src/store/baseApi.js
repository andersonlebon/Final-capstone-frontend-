import axios from 'axios';

export default axios.create({
  baseURL: 'https://house-booking-api.herokuapp.com/',
});