import axios from 'axios';

axios.defaults.baseURL = 'https://demo1030918.mockable.io/';

export const fetchPresets = async () => {
  const response = await axios.get('/');
  return response.data;
};
